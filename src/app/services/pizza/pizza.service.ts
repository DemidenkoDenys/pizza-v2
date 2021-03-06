import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  prices;

  constructor(public firestore: FirestoreService) {}

  async getTotalPrice(pizza) {
    if (!('ingredients' in pizza)) return 0;
    if (!this.prices) this.prices = await this.firestore.getIngredientPrices(); 

    return Object.entries(pizza.ingredients).reduce((total, [id, gramms]) =>
      (id in this.prices ? this.prices[id] * <number>gramms : 0) + total, 0);
  }

  async getTotalWeight(pizza) {
    if (!('ingredients' in pizza)) return 0;

    return Object.values(pizza.ingredients).reduce((total: number, gramms: number) => total + gramms, 0);
  }

  async addInfo(snapshot) {
    return await Promise.all(
      snapshot.map(async pizza => {
        const price = Math.round(await this.getTotalPrice(pizza));
        const weight = await this.getTotalWeight(pizza);
        return { ...pizza, price, weight };
      })
    );
  }

  async reCalculate(pizza, key) {
    const sizes = await this.firestore.getSizes();
    const price = Math.round(pizza.price * sizes[key]);
    const weight = Math.round(pizza.weight * sizes[key]);
    return { ...pizza, price, weight };
  }
}
