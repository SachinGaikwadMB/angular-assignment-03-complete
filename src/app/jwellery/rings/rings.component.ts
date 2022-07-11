import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/productServices/api.service';
import { JwelleryService } from '../jwelleryServices/jwellery.service';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.scss']
})
export class RingsComponent implements OnInit {
  productData : any = [];
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.getProductsData().subscribe((resp)=>{
      this.productData = resp;
    });
  }
}
