import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Finished } from './finished/finished';

const routes: Routes = [
  {
    path: '',
    component:Finished
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
