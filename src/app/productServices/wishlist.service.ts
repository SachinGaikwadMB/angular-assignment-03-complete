import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  productWishList : any = [];
  productList = new BehaviorSubject<any>([]);


  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  addToWishList(product : any) {
    this.productWishList.push(product);
    this.productList.next(this.productWishList);
  }
}
