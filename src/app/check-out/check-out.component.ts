import { Component, OnInit } from '@angular/core';
import { CartService } from '../productServices/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  cartProducts: any = [];
  totalPrice: any;

  necklacesCount = 0;
  earringsCount = 0;
  ringsCount = 0;
  braceletsCount = 0;

  discountValue = 0;
  netPrice = 0;
  isCouponApplied: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((response) => {
      this.cartProducts = response;
      console.log(response);
    });

    this.totalPrice = this.getTotal();

    this.cartProducts.forEach((item: any) => {
      let productCategory = item.category;
      if (productCategory == 'necklace') {
        this.necklacesCount++;
      } else if (productCategory == 'earring') {
        this.earringsCount++;
      } else if (productCategory == 'rings') {
        this.ringsCount++;
      } else if (productCategory == 'bracelet') {
        this.braceletsCount++;
      }
    });
  }

  //Calculate total of items 
  getTotal() {
    let price = 0;
    this.cartProducts.forEach((items: any) => {
      price += items.price;
      console.log(price);
    });

    return price;
  }

  //apply the valid coupon and calculate discounted value
  applyCoupon(value: any) {
    if (value === 10 && this.earringsCount >= 1) {
      
      this.discountValue = (value / 100) * this.totalPrice;
      this.netPrice = this.totalPrice - this.discountValue;
      this.isCouponApplied = true;
      alert('Coupon Applied Successfully!');
    } else if (value === 20 && this.necklacesCount >= 2) {
      this.discountValue = (value / 100) * this.totalPrice;
      this.netPrice = this.totalPrice - this.discountValue;
      this.isCouponApplied = true;
      alert('Coupon Applied Successfully!');
    } else if (value === 15 && this.ringsCount >= 1) {
      this.discountValue = (value / 100) * this.totalPrice;
      this.netPrice = this.totalPrice - this.discountValue;
      this.isCouponApplied = true;
      alert('Coupon Applied Successfully!');
    } else if (value === 25 && this.braceletsCount >= 2) {
      this.discountValue = (value / 100) * this.totalPrice;
      this.netPrice = this.totalPrice - this.discountValue;
      this.isCouponApplied = true;
      alert('Coupon Applied Successfully!');
    } else {
      alert('Invalid Coupon, Please select appropriate one.');
    }
  }

  //Remove product from cart
  removeFromCart(idx: number) {
    alert('Deleted from Cart!!');
    this.cartProducts.splice(idx, 1);
  }
}
