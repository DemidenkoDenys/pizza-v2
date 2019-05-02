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
    this.initPizzaList();
  }
  
  async initPizzaList() {
    let snapshot = await this.firestoreService.getPizzas(this.baseHoisting);
    this.pizzas = await this.pizzaService.addInfo(snapshot);
  }
    
  baseHoisting = item => ('id' in item && item.id === 'base_0' ? -1 : 0);
}
