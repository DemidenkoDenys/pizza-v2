import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {

  ingredientPrices;

  constructor(public db: AngularFirestore) {}

  getCollectionOnce(name: string) {
    if (!(name in this)) this[name] = this.db.collection(name).ref.get();
    return this[name];
  }

  async getPizzas(sorting) {
    const pizzaSnapshot = await this.getCollectionOnce('pizza');
    return pizzaSnapshot.docs
      .map(docSnapshot => docSnapshot.data())
      .sort(item => sorting(item));
  }

  async getIngredientPrices() {
    if (this.ingredientPrices) return this.ingredientPrices;

    const ingredientsSnapshot = await this.getCollectionOnce('ingredients');
    return this.createObjectMap(ingredientsSnapshot, 'id', 'price');
  }

  async getSizes() {
    const sizeSnapshot = await this.getCollectionOnce('sizes');
    return this.createObjectMap(sizeSnapshot);
  }

  createObjectMap = (snapshotsArray, f1 = null, f2 = null) =>
    snapshotsArray.docs.reduce((acc, item) => {
      const data = item.data();
      const key = Object.keys(data)[0];
      const id = f1 ? data[f1] : key;
      const value = f1 ? data[f2] : data[id];
      acc[id] = value;
      return acc;
    }, {});
}