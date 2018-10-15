import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent, ProductReviewsComponent, ProductFormComponent } from './components';

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