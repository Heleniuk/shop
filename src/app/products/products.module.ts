import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductReviewsComponent
  ],
  exports: [
    ProductComponent,
    ProductListComponent,
    ProductReviewsComponent
  ]
})
export class ProductsModule { }
