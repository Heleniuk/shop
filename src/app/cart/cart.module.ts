import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CoreModule } from '../core/core.module';
import { CartComponent, CartItemComponent } from './components';
import { CartContainerComponent } from './cart-container.component';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    CartRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CartComponent,
    CartItemComponent,
    CartContainerComponent,
    ProcessOrderComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
