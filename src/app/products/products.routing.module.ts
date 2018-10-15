import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {
    path: 'products',
    component: ShopComponent
  },
  {
    path: 'reviews/:productId',
    component: ProductReviewsComponent,
    outlet: 'reviews'
  },
  {
    path: 'edit/:productId',
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }