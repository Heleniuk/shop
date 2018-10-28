import { Action } from '@ngrx/store';
import { ProductModel } from '../../models/product.model';

export enum ProductsActionTypes {
    GET_PRODUCTS = '[Products] GET_PRODUCTS',
    CREATE_PRODUCT = '[Products] CREATE_PRODUCT',
    CREATE_PRODUCT_SUCCESS = '[Products] CREATE_PRODUCT_SUCCESS',
    UPDATE_PRODUCT = '[Products] UPDATE_PRODUCT',
    UPDATE_PRODUCT_SUCCESS = '[Products] UPDATE_PRODUCT_SUCCESS',
    DELETE_PRODUCT = '[Products] DELETE_PRODUCT',
    DELETE_PRODUCT_SUCCESS = '[Products] DELETE_PRODUCT_SUCCESS',
    GET_PRODUCTS_SUCCESS = '[Products] GET_PRODUCTS_SUCCESS',
    PRODUCTS_ERROR = '[Products] PRODUCTS_ERROR'
}

export class GetProductsSuccess implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCTS_SUCCESS;
    constructor(public payload: ProductModel[]) { }
}

export class GetProducts implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCTS;
}

export class CreateProduct implements Action {
    readonly type = ProductsActionTypes.CREATE_PRODUCT;
    constructor(public payload: ProductModel) { }
}

export class CreateProductSuccess implements Action {
    readonly type = ProductsActionTypes.CREATE_PRODUCT_SUCCESS;
    constructor(public payload: ProductModel) { }
}

export class UpdateProduct implements Action {
    readonly type = ProductsActionTypes.UPDATE_PRODUCT;
    constructor(public payload: ProductModel) { }
}

export class UpdateProductSuccess implements Action {
    readonly type = ProductsActionTypes.UPDATE_PRODUCT_SUCCESS;
    constructor(public payload: ProductModel) { }
}

export class DeleteProduct implements Action {
    readonly type = ProductsActionTypes.DELETE_PRODUCT;
    constructor(public payload: ProductModel) { }
}

export class DeleteProductSuccess implements Action {
    readonly type = ProductsActionTypes.DELETE_PRODUCT_SUCCESS;
    constructor(public payload: ProductModel) { }
}

export class ProductsError implements Action {
    readonly type = ProductsActionTypes.PRODUCTS_ERROR;
    constructor(public payload: Error | string) { }
}

export type ProductsActions
    = GetProducts
    | GetProductsSuccess
    | CreateProduct
    | CreateProductSuccess
    | UpdateProduct
    | UpdateProductSuccess
    | DeleteProduct
    | DeleteProductSuccess
    | ProductsError;