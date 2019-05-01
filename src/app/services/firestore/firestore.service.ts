import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {

  pizzas;
  ingredients;
  ingredientPrices;

  constructor(public db: AngularFirestore) {}

  getCollectionOnce(name: string) {
    return this.db.collection(name).ref.get();
  }

  async getPizzasCollection() {
    return this.pizzas || this.getCollectionOnce('pizza');
  }

  async getPizzas() {
    const pizzaSnapshot = await this.getPizzasCollection();
    return pizzaSnapshot.docs.map(docSnapshot => docSnapshot.data());
  }

  async getIngredientsCollection() {
    return this.ingredients || this.getCollectionOnce('ingredients');
  }

  async getIngredientPrices() {
    if (this.ingredientPrices) return this.ingredientPrices;

    const ingredientPrices = {};
    const ingredientsSnapshot = await this.getIngredientsCollection();

    ingredientsSnapshot.docs.map(docSnapshot => {
      const { id, price } = docSnapshot.data();
      ingredientPrices[id] = price;
    });

    return ingredientPrices;
  }

}