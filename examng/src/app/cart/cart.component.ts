import { Component, OnInit } from '@angular/core';
import {IProduct } from '../Model/IProduct';
import {CartService} from '../Service/Cartsvc';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productDetail:IProduct[]
  constructor(private cartsvc:CartService ) { }

  ngOnInit(): void {
    this.fetchProductData();
  }
  fetchProductData(){
    let res = this.cartsvc.getItems();
        this.productDetail=res;
        console.log(res)
  }
  DeleteCart(id){
    let res = this.cartsvc.clearCart();
    this.productDetail=res;
  }

}
