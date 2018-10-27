import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductComponent, ProductListComponent, ProductReviewsComponent, ProductFormComponent } from './components';
import { ShopComponent } from './shop.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer, ProductsEffects } from '../core/+store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', productsReducer), 
    EffectsModule.forFeature([ProductsEffects])
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductReviewsComponent,
    ProductFormComponent,
    ShopComponent
  ],
  exports: [
    ProductComponent,
    ProductListComponent,
    ProductReviewsComponent,
    ProductFormComponent,
    ShopComponent
  ]
})
export class ProductsModule { }
