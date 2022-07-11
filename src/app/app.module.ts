import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JwelleryModule } from './jwellery/jwellery.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ProductDetailComponent,
    CheckOutComponent,
    FooterComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwelleryModule
    
  ],
  providers: [],
  exports:[NavbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
