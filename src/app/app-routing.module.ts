import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent, PathNotFoundComponent } from './core/components';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule'
  },
  {
    path: 'cart',
    loadChildren: './cart/cart.module#CartModule'
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }