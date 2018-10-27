import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { ProductModel } from '../../../core/models/product.model';
import { CartItem } from '../../../core/models/cart-item.model';
import { Store, select } from '@ngrx/store';
import { AppState, getProductsData, getProductsError } from '../../../core/+store';
import { Observable } from 'rxjs';
import * as RouterActions from './../../../core/+store/router/router.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<ReadonlyArray<ProductModel>>;
  productsError$: Observable<Error | string>;

  constructor(
    private store: Store<AppState>,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(getProductsData));
    this.productsError$ = this.store.pipe(select(getProductsError));
  }

  onAddToCart(cartItem: CartItem): void {
    this.cartService.addToCart(cartItem);
  }

  showReviews(product: ProductModel): void {
    this.store.dispatch(new RouterActions.Go({
      path: [{ outlets: { reviews: ['reviews', product.id] } }]
    }));
  }

}
