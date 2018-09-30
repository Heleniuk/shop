import { ProductModel } from "./product.model";

export class CartItem {
    constructor(
        public product: ProductModel,
        public quantity: Number
    ) {
        this.product = product;
        this.quantity = quantity || 1;
    }
}