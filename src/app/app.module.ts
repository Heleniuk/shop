import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CartModule,
    ProductsModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
