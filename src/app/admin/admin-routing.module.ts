import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

import { AuthGuard } from '../core/guards/auth.guard';
import { ManageProductsComponent, ManageOrdersComponent, AdminDashboardComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'manage-products', component: ManageProductsComponent },
          { path: 'manage-orders', component: ManageOrdersComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
