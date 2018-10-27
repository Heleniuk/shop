import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as ProductsActions from './products.actions';
import * as RouterActions from '../router/router.actions';

import { Observable } from 'rxjs';
import { switchMap, pluck, concatMap, map } from 'rxjs/operators';
import { ProductsPromiseService } from '../../../products';
import { ProductModel } from '../../models/product.model';

@Injectable()
export class ProductsEffects {

  constructor(private actions$: Actions,
    private productsPromiseService: ProductsPromiseService) {
    console.log('[PRODUCTS EFFECTS]');
  }

  @Effect()
  getProducts$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.GetProducts>(ProductsActions.ProductsActionTypes.GET_PRODUCTS),
    switchMap((action: ProductsActions.GetProducts) =>
      this.productsPromiseService
        .getAllProducts()
        .then(products => new ProductsActions.GetProductsSuccess(products))
        .catch(err => new ProductsActions.ProductsError(err))
    )
  );

  @Effect()
  updateProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.UpdateProduct>(ProductsActions.ProductsActionTypes.UPDATE_PRODUCT),
    pluck('payload'),
    concatMap((payload: ProductModel) =>
      this.productsPromiseService
        .update(payload)
        .then(product => new ProductsActions.UpdateProductSuccess(product))
        .catch(err => new ProductsActions.ProductsError(err))
    )
  );

  @Effect()
  createProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.CreateProduct>(ProductsActions.ProductsActionTypes.CREATE_PRODUCT),
    pluck('payload'),
    concatMap((payload: ProductModel) =>
      this.productsPromiseService
        .create(payload)
        .then(product => new ProductsActions.CreateProductSuccess(product))
        .catch(err => new ProductsActions.ProductsError(err))
    )
  );

  @Effect()
  createUpdateProductSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.CreateProduct | ProductsActions.UpdateProduct>(
      ProductsActions.ProductsActionTypes.CREATE_PRODUCT_SUCCESS,
      ProductsActions.ProductsActionTypes.UPDATE_PRODUCT_SUCCESS
    ),
    map(
      action =>
        new RouterActions.Go({
          path: ['/products']
        })
    )
  );

  @Effect()
  deleteProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.DeleteProduct>(ProductsActions.ProductsActionTypes.DELETE_PRODUCT),
    pluck('payload'),
    concatMap((payload: ProductModel) =>
      this.productsPromiseService
        .delete(payload)
        .then(
          () => {
            return new ProductsActions.DeleteProductSuccess(payload);
          }
        )
        .catch(err => new ProductsActions.ProductsError(err))
    )
  );

}
