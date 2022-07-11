import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/productServices/api.service';

@Component({
  selector: 'app-earrings',
  templateUrl: './earrings.component.html',
  styleUrls: ['./earrings.component.scss'],
})
export class EarringsComponent implements OnInit {
  productData: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProductsData().subscribe((resp) => {
      this.productData = resp;
    });
  }
}
