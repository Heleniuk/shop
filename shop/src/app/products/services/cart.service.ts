import { Injectable, Input } from "@angular/core";

import { ProductModel } from "../models/product.model";

@Injectable()
export class CartService {
    productsInCart: Array<ProductModel> = new Array<ProductModel>();

    addToCart(product: ProductModel): void {
        this.productsInCart.push(product);
        console.log('CartService: product ' + product.name + ' has been added to Cart.');
    }

    removeFromCart(product: ProductModel): void {
        const productIndex = this.productsInCart.indexOf(product);
        if (productIndex > -1) {
            this.productsInCart.splice(productIndex, 1);
            console.log('CartService: product ' + product.name + ' has been removed from Cart.');
        } else {
            console.log('Product is not in Cart');
        }
    }

    getProductsInCart(): Array<ProductModel> {
        return this.productsInCart;
    }
}
