import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../productServices/api.service';
import { CartService } from '../productServices/cart.service';
import { WishlistService } from '../productServices/wishlist.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productData : any = [];
  

  constructor(
    private apiService : ApiService,
    private router:ActivatedRoute,
    private cartService : CartService,
    private wishListService : WishlistService) { }

  ngOnInit(): void {
    this.apiService.getProductById(this.router.snapshot.params['id'])
    .subscribe((resp)=> {
     this.productData = resp; 
    });
  }


  //Method for adding product into cart
  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Product added to the cart');
  }

  //Method for adding product into Wish list

  addToWishList(product:any) {
    this.wishListService.addToWishList(product);
    alert('Product Added to Wish list');

  }

}
