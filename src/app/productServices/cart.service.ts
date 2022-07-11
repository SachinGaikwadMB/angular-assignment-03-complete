import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList : any = [];
  productList = new BehaviorSubject<any>([]);
 
  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

 
  addToCart(product : any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
  }

  

}
