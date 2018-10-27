import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductReviewsComponent, ProductFormComponent, ProductListComponent } from './components';
import { ShopComponent } from './shop.component';
import { ProductsStatePreloadingGuard, ProductExistsGuard } from './guards';

const routes: Routes = [
  {
    path: 'products',
    component: ShopComponent,
    canActivate: [ProductsStatePreloadingGuard],
    children: [
      {
        path: 'edit/:productId',
        component: ProductFormComponent,
        canActivate: [ProductExistsGuard]
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
    canActivate: [ProductExistsGuard],
    outlet: 'reviews'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }