import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { OrdersModule } from '../orders/orders.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageProductsComponent,
    ManageOrdersComponent
  ]
})
export class AdminModule { }
