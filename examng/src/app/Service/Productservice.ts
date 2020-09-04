import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import {IProduct } from '../Model/IProduct';

@Injectable({
    providedIn: 'root',
  })
export class Prdouctsvc implements InMemoryDbService {
    createDb(){
   const productlist: IProduct[] = [
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
    return (productlist)
}


};