import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarringsComponent } from './earrings/earrings.component';
import { RingsComponent } from './rings/rings.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    EarringsComponent,
    RingsComponent,
    BraceletsComponent,
    NecklaceComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class JwelleryModule { }
