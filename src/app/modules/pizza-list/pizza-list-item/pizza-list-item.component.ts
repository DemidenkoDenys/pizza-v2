import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pizza-list-item',
  templateUrl: './pizza-list-item.component.html',
  styleUrls: ['./pizza-list-item.component.scss']
})
export class PizzaListItemComponent implements OnInit {

  @Input() pizza;

  constructor() {}

  ngOnInit() {
    console.log(this.pizza);
  }

}
