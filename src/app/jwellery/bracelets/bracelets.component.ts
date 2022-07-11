import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/productServices/api.service';

@Component({
  selector: 'app-bracelets',
  templateUrl: './bracelets.component.html',
  styleUrls: ['./bracelets.component.scss']
})
export class BraceletsComponent implements OnInit {

  productData : any = [];
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.getProductsData().subscribe((resp)=>{
      this.productData = resp;
    });
  }

}
