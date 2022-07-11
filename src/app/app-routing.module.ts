import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BraceletsComponent } from './jwellery/bracelets/bracelets.component';
import { EarringsComponent } from './jwellery/earrings/earrings.component';
import { NecklaceComponent } from './jwellery/necklace/necklace.component';
import { RingsComponent } from './jwellery/rings/rings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },

  {
    path: 'jwellery/rings',
    component: RingsComponent,
  },
  {
    path: 'jwellery/earrings',
    component: EarringsComponent,
  },
  {
    path: 'jwellery/bracelet',
    component: BraceletsComponent,
  },
  {
    path: 'jwellery/necklace',
    component: NecklaceComponent,
  },
  {
    path: 'details/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'cart/checkout',
    component: CheckOutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
