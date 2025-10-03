import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from './store/store';
import { Details } from './details/details';

const routes: Routes = [
 
 {
  path:'',
  component:Details

 } ,
 
                        
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { 
  
}
