import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductComponent, ProductListComponent, ProductReviewsComponent, ProductFormComponent, ShopComponent } from './components';

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
