import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { PizzaService } from '../../services/pizza/pizza.service';


@Component({
  selector: 'pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  pizzas;
  
  constructor(
    public pizzaService: PizzaService,
    public firestoreService: FirestoreService,
  ) {}

  ngOnInit() {
    this.initList();
  }

  async initList() {
    let snapshot = await this.firestoreService.getPizzas();
    this.pizzas = await Promise.all(snapshot.map(async pizza => {
      const price = await this.pizzaService.getTotalPrice(pizza);
      const weight = await this.pizzaService.getTotalWeight(pizza);
      return { ...pizza, price, weight };
    }));
  }

}
