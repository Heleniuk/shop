import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimingInterceptor } from './core/interceptors/timing-interceptor';
import { StoreModule } from '@ngrx/store';
import { productsReducer, ProductsEffects, RouterEffects, routerReducers, RouterStateSerializerProvider } from './core/+store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    ProductsModule,
    AppRoutingModule,
    StoreModule.forFeature('products', productsReducer), 
    EffectsModule.forFeature([ProductsEffects]),
    EffectsModule.forRoot([RouterEffects]),
    StoreModule.forRoot(routerReducers, {
      metaReducers: []
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
  }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
    RouterStateSerializerProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
