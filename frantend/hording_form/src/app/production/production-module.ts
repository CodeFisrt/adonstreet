import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionRoutingModule } from './production-routing-module';
import { Store } from './store/store';
import { Details } from './details/details';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductionRoutingModule,
    Store,
    Details
    
  ]
})
export class ProductionModule { }
