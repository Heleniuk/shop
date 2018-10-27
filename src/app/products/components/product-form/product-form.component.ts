import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../core/models/product.model';
import { Store, select } from '@ngrx/store';
import { AppState, getSelectedProductByUrl } from '../../../core/+store';
import { Subscription } from 'rxjs';
import * as ProductsActions from './../../../core/+store/products/products.actions';
import * as RouterActions from './../../../core/+store/router/router.actions';
import { AutoUnsubscribe } from '../../../core/decorators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
@AutoUnsubscribe()
export class ProductFormComponent implements OnInit {
  product: ProductModel;
  private sub: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.sub = this.store
    .pipe(select(getSelectedProductByUrl))
    .subscribe(product => this.product = product);
  }

  onSave() {
    const product = { ...this.product };

    if (product.id) {
      this.store.dispatch(new ProductsActions.UpdateProduct(product));
    } else {
      this.store.dispatch(new ProductsActions.CreateProduct(product));
    }
  }

  onGoBack(): void {
    this.store.dispatch(new RouterActions.Go({
      path: ['/admin/products']
    }));
  }

}
