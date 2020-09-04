import { Component, OnInit } from '@angular/core';
import {Prdouctsvc} from '../service/Productservice'
import {ProductDetailsvc} from '../service/ProductDetailsvc';


import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';
import {IProduct } from '../Model/IProduct';
import {CartService} from '../Service/Cartsvc';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetail:IProduct[]
  constructor(private prdouctsvc:Prdouctsvc,private productDetailsvc:ProductDetailsvc,private cartsvc:CartService,private router:Router ) { }

  ngOnInit(): void {
    this.fetchProductData();
  }
  fetchProductData(){
    let res = this.productDetailsvc.getProductData();
        this.productDetail=res;
        console.log(res)
  }
  insertCart(product){

    this.cartsvc.addToCart(product);
    this.router.navigate(['/cart']);
  }

}
