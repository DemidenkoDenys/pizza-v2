import { NgModule } from '@angular/core';
import { FirestoreService } from './firestore/firestore.service';
import { PizzaService } from './pizza/pizza.service';


@NgModule({
  providers: [
    FirestoreService,
    PizzaService
  ]
})
export class AppServiceModule { }