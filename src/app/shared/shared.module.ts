import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ProductsModule } from '../products/products.module';
import { CartModule } from '../cart/cart.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderByPipe
  ],
  exports: [
    OrderByPipe
  ]
})
export class SharedModule { }
