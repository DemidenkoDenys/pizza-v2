import { Component, OnInit, Input } from '@angular/core';
import { PizzaService } from '../../../services/pizza/pizza.service';

@Component({
  selector: 'pizza-list-item',
  templateUrl: './pizza-list-item.component.html',
  styleUrls: ['./pizza-list-item.component.scss']
})
export class PizzaListItemComponent implements OnInit {

  @Input() pizzaInit;
  pizza;

  constructor(public pizzaService: PizzaService) {}

  ngOnInit() {
    this.pizza = this.pizzaInit;
  }

  onSizeChecked = key =>
    this.pizzaService
      .reCalculate(this.pizzaInit, key)
      .then(newPizza => this.pizza = newPizza);

  onOrder = () => console.log('ordered');

}
