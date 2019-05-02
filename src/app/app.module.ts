import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppServiceModule } from './services';
import { AppComponent } from './app.component';

import { PizzaListModule } from './modules/pizza-list/pizza-list.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    PizzaListModule,
  ],
  providers: [
    AppServiceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
