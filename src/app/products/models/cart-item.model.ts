import { ProductModel } from "./product.model";

export class CartItem {
    constructor(
        public product: ProductModel,
        public quantity: number
    ) {
        this.product = product;
        this.quantity = quantity || 1;
    }
}