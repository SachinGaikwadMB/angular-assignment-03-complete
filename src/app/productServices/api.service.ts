import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProductsData() {
    return this.http.get('http://localhost:3000/products');
  }

  getProductById(id : number) {
    return this.http.get('http://localhost:3000/products/'+id);

  }
}
