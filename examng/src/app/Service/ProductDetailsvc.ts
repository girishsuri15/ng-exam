import { Injectable } from '@angular/core';

import { Observable, of, throwError} from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {IProduct } from '../Model/IProduct'; 
@Injectable({
  providedIn: 'root'
})
export class ProductDetailsvc {
  private apiURL = "api/productlist";

  constructor(private http: HttpClient) { }

  /** GET ALL user detail. */
  getProductDetails(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiURL);
  }

  getProductData(): IProduct[] {
    return [
      {
          id:1,
          Name:"addidas",
          Price: 33,
          Description: "gehhhh",
          Tags: "ddd",
          Category: "shoe",
          Quantity : 1,
          Returnable: true
      },
      {
          id:2,
          Name:"nike",
          Price: 33,
          Description: "gehhhh",
          Tags: "dfrefgrtg",
          Category: "shoe",
          Quantity : 1,
          Returnable: true
      },
      {
          id:3,
          Name:"puma",
          Price: 33,
          Description: "gehhhh",
          Tags: "edrtg",
          Category: "shoe",
          Quantity : 1,
          Returnable: true
      }
  ]
  }

}