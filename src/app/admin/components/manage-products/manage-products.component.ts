import { Component, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../../core/models/product.model';
import { Store, select } from '@ngrx/store';
import { AppState, getProductsData } from '../../../core/+store';
import { Subscription } from 'rxjs';
import * as RouterActions from './../../../core/+store/router/router.actions';
import * as ProductsActions from './../../../core/+store/products/products.actions'
import { AutoUnsubscribe } from '../../../core/decorators';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
@AutoUnsubscribe()
export class ManageProductsComponent implements OnInit {
  products: ProductModel[];
  private sub: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.sub = this.store
    .pipe(select(getProductsData))
    .subscribe(products => this.products = products);
  }

  onAdd(): void {
    this.store.dispatch(new RouterActions.Go({
      path: ['/admin/products/add']
    }));
  }

  showReviews(product: ProductModel): void {
    this.store.dispatch(new RouterActions.Go({
      path: [{ outlets: { reviews: ['reviews', product.id] } }]
    }));
  }

  onEdit(product: ProductModel): void {
    const link = ['/admin/products/edit', product.id];
    this.store.dispatch(new RouterActions.Go({
      path: link
    }));
  }

  onDelete(product: ProductModel): void {
    this.store.dispatch(new ProductsActions.DeleteProduct(product));
  }

}
