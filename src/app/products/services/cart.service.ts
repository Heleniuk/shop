import { Injectable, Input } from "@angular/core";

import { ProductModel } from "../models/product.model";
import { CartItem } from "../models/cart-item.model";
import { CommunicatorService } from "./communicator.service";

@Injectable()
export class CartService {
    productsInCart: Array<CartItem> = new Array<CartItem>();

    constructor(private communicatorService: CommunicatorService) {}

    addToCart(cartItem: CartItem): void {
        let index = this.productsInCart.findIndex(p => p.name === cartItem.name);
        cartItem.quantity++;
        if (index < 0) {
            this.productsInCart.push(cartItem);
        } else {
            this.productsInCart[index] = cartItem;
        }
        this.communicatorService.publishData(this.productsInCart);
    }

    removeFromCart(cartItem: CartItem): void {
        let index = this.productsInCart.findIndex(p => p.name === cartItem.name);
        if (index < 0) {
            console.log('Error!');
        } else {
            if (cartItem.quantity === 1) {
                this.productsInCart.splice(index, 1);
            } else {
                cartItem.quantity--;
                this.productsInCart[index] = cartItem;
            }
            this.communicatorService.publishData(this.productsInCart);
        }
    }

    getTotalSum(): number {
        let totalSum: number = 0;
        this.productsInCart.forEach(item => totalSum += item.price * item.quantity);
        return totalSum;
    }

}
