import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { PizzaListComponent } from './pizza-list.component';
import { PizzaListItemComponent } from './pizza-list-item/pizza-list-item.component';
import { SizeCheckerComponent } from '../../components/size-checker/size-checker.component';
import { PriceWeightComponent } from '../../components/price-weight/price-weight.component';


@NgModule({
  declarations: [
    PizzaListComponent,
    PizzaListItemComponent,
    SizeCheckerComponent,
    PriceWeightComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    PizzaListComponent
  ],
  providers: [
    MatIconRegistry
  ]
})
export class PizzaListModule { }
