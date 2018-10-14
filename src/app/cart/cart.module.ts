import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule, cartComponents } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';
import { CartContainerComponent } from './cart-container.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule
  ],
  declarations: [
    cartComponents,
    CartItemComponent,
    CartContainerComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
