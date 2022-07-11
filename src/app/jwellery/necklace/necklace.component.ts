import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/productServices/api.service';

@Component({
  selector: 'app-necklace',
  templateUrl: './necklace.component.html',
  styleUrls: ['./necklace.component.scss']
})
export class NecklaceComponent implements OnInit {

  productData : any = [];
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.getProductsData().subscribe((resp)=>{
      this.productData = resp;
    });
  }

}
