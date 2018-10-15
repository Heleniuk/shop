import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductReviewsComponent, ProductFormComponent, ProductListComponent } from './components';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'reviews/:productId',
    component: ProductReviewsComponent,
    outlet: 'reviews'
  },
  {
    path: 'edit/:productId',
    component: ProductFormComponent
  },
  {
    path: 'add',
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }