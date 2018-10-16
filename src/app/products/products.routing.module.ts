import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductReviewsComponent, ProductFormComponent, ProductListComponent } from './components';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: 'products',
    component: ShopComponent,
    children: [
      {
        path: 'edit/:productId',
        component: ProductFormComponent
      },
      {
        path: 'add',
        component: ProductFormComponent
      },
      {
        path: '',
        component: ProductListComponent
      },
    ]
  },
  {
    path: 'reviews/:productId',
    component: ProductReviewsComponent,
    outlet: 'reviews'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }