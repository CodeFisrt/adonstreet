import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Finished } from './finished/finished';
import { Raw } from './raw/raw';

const routes: Routes = [
  {
    path: 'finished',
    component:Finished
  },
  {
    path:'raw',
    component:Raw
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
