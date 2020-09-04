import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {Prdouctsvc} from './service/Productservice'


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      Prdouctsvc, { dataEncapsulation: false,passThruUnknownUrl: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
