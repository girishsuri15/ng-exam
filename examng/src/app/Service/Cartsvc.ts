import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
    constructor() {}
    items = [];
  
    addToCart(product) {
      this.items.push(product);
      console.log(this.items)
    }
  
    getItems() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }
    deleteCart(id){
      this.items[id-1]={};
      return this.items;
    }
  }