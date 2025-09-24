import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing-module';
import { Finished } from './finished/finished';
import { Raw } from './raw/raw';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    Finished,
    Raw
  ]
})
export class ProductModule { }
