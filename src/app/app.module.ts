import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './products/components/product/product.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { CartComponent } from './products/components/cart/cart.component';
import { ShoppingComponent } from './products/components/shopping/shopping.component';
import { CartItemComponent } from './products/components/cart-item/cart-item.component';
import { CommunicatorService } from './products/services/communicator.service';
import { CartService } from './products/services/cart.service';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    ShoppingComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [CommunicatorService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
