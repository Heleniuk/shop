import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { OrdersModule } from '../orders/orders.module';
import { ProductsModule } from '../products/products.module';
import { AdminDashboardComponent, ManageProductsComponent, ManageOrdersComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    OrdersModule,
    ProductsModule,
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
