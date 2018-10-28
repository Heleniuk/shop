import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getRouterState } from '../router';
import { productAdapter, ProductsState } from './products.state';
import { ProductModel } from '../../models/product.model';
import { BookModel } from '../../models/book.model';

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const {
    selectEntities: getProductsEntities,
    selectAll: getProductsData
} = productAdapter.getSelectors(getProductsState);

export const getProductsError = createSelector(getProductsState, (state: ProductsState) => state.error);

export const getProductsLoaded = createSelector(getProductsState, (state: ProductsState) => state.loaded);

export const getSelectedProductByUrl = createSelector(
    getProductsEntities,
    getRouterState,
    (products, routerState): ProductModel => {
        const productId = routerState.state.params.productId;
        if (productId) {
            return products[productId];
        } else {
            return new BookModel(null, '', '', 0, null, true);
        }
    });