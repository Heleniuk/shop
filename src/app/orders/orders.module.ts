import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { OrderItemComponent } from './order-item/order-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderComponent,
    OrderItemComponent
  ],
  exports: [
    OrderComponent,
    OrderItemComponent
  ]
})
export class OrdersModule { }
