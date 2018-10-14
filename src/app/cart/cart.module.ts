import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule
  ],
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
