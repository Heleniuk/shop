import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent, OrderItemComponent } from './components';

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
