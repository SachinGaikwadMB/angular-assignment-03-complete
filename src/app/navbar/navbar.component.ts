import { Component, OnInit } from '@angular/core';
import { CartService } from '../productServices/cart.service';
import { WishlistService } from '../productServices/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  totalCartItem: number = 0;
  totalWishList: number = 0;

  cartProductList: any = [];
  productWishList: any = [];

  constructor(
    private cartService: CartService,
    private wishListService: WishlistService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalCartItem = res.length;
      this.cartProductList = res;
    });

    console.log(this.cartProductList);

    this.wishListService.getProducts().subscribe((res) => {
      this.totalWishList = res.length;
      this.productWishList = res;
    });
  }

  /*
    Method to remove product from wishlist 
  */
  removeFromWishList(idx: number) {
    alert('Removed from wishlist');
    this.productWishList.splice(idx, 1);
    this.totalWishList--;
  }

  /*
     Method to add product to the cart of paticular index
     and at the same time remove from that particular  wish list 
  */
  addToCart(product: any, idx: number) {
    this.cartService.addToCart(product);
    alert('Product Added to the Cart');
    this.removeFromWishList(idx);
  }

  /*
  Product is added to wish list from cart and remove from that cart
  
  */
  addToWishList(product: any, idx: number) {
    alert('Product Added to wishlist');
    this.wishListService.addToWishList(product);
    this.removeFromCart(idx);
  }

  /*
  product is removed from cart of index and update count
  */
  removeFromCart(idx: number) {
    alert('Deleted from Cart!!');
    this.cartProductList.splice(idx, 1);
    this.totalCartItem--;
  }
}
