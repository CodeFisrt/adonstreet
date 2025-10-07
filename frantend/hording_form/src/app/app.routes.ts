import { Routes } from '@angular/router';
import { Dashboard } from './page/dashboard/dashboard';

import { login } from './page/login/login';
import { CrudOpretion } from './page/crud-opretion/crud-opretion';
import { Hoarding } from './page/hording/hording';
import { Finished } from '../product/finished/finished';
import { ReForm } from './Test/re-form/re-form';
import { Employee } from './Test/employee/employee';



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
    { path: 'product', loadChildren: () => import('../product/product-module').then(m => m.ProductModule) },

    { path: 'production', loadChildren: () => import('../app/production/production-module').then(m => m.ProductionModule) },
    {
        path: "Employee",
        component: Employee

    },
    {
        path:"form",
        component:ReForm
    }
];
