import { Injectable, Input } from "@angular/core";

import { ProductModel } from "../models/product.model";
import { CartItem } from "../models/cart-item.model";
import { Observable, observable } from "rxjs";

@Injectable()
export class CartService {
    productsInCart: Map<ProductModel, Number> = new Map<ProductModel, Number>();

    addToCart(product: ProductModel): void {
        if (this.isInCart(product)) {
            let quantity: any = this.productsInCart.get(product);
            this.productsInCart.set(product, quantity++)
            console.log('On add: ' + this.productsInCart.size);
        } else {
            this.productsInCart.set(product, 1);
            console.log('On add: ' + this.productsInCart.size);
        }
    }

    removeFromCart(product: ProductModel): void {
        if (!this.isInCart(product)) {
            console.log('This product cannot be removed because it is not in Cart');
        } else {
            let quantity: any = this.productsInCart.get(product);
            if (quantity < 2) {
                this.productsInCart.delete(product);
            } else {
                this.productsInCart.set(product, quantity--)
            }
        }
    }

    getCartItems():  Promise<Array<CartItem>> {
        let cartItems: Array<CartItem> = new Array<CartItem>();
        this.productsInCart.forEach(
            (value: Number, key: ProductModel) => cartItems.push(new CartItem(key, value)));
        return Observable.of(cartItems);
    }

    isInCart(product: ProductModel): boolean {
        return this.productsInCart.has(product);
    }
}
