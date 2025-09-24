import { Routes } from '@angular/router';
import { Dashboard } from './page/dashboard/dashboard';

import { login } from './page/login/login';
import { CrudOpretion } from './page/crud-opretion/crud-opretion';
import { Hoarding } from './page/hording/hording';
import { Finished } from '../product/finished/finished';


export const routes: Routes = [
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'hoarding',
        component: Hoarding
    },
    {
        path: 'login',
        component: login
    },
    {
        path: 'crud',
        component: CrudOpretion

    },
    { path: 'product',loadChildren: () => import('../product/product-module').then(m => m.ProductModule) },
         

];
