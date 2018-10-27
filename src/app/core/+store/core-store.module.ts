import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { RouterEffects, routerReducers, RouterStateSerializerProvider } from './router';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([RouterEffects]),
    StoreModule.forRoot(routerReducers),
    StoreRouterConnectingModule.forRoot(),
  ],
  declarations: [],
  providers: [
    RouterStateSerializerProvider,
  ]
})
export class CoreStoreModule { }
