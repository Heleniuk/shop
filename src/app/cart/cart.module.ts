import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartContainerComponent } from './cart-container.component';
import { CartRoutingModule } from './cart-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    CartRoutingModule
  ],
  declarations: [
    CartComponent,
    CartItemComponent,
    CartContainerComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
