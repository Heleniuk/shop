import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CoreModule } from '../core/core.module';
import { CartComponent, CartItemComponent } from './components';
import { CartContainerComponent } from './cart-container.component';

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
