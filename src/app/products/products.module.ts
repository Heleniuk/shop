import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './components/shop/shop.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
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
