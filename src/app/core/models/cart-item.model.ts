import { ProductModel } from "./product.model";

export interface CartItem extends ProductModel {
    quantity?: number
}