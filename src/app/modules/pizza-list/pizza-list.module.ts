import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaListComponent } from './pizza-list.component';
import { PizzaListItemComponent } from './pizza-list-item/pizza-list-item.component';

@NgModule({
  declarations: [
    PizzaListComponent,
    PizzaListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PizzaListComponent
  ]
})
export class PizzaListModule { }
