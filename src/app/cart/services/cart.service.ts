import { Injectable, Input } from "@angular/core";
import { CartItem } from "../../core/models/cart-item.model";
import { CommunicatorService } from "../../core/services/communicator.service";

@Injectable({providedIn: 'root'})
export class CartService {
    productsInCart: Array<CartItem> = new Array<CartItem>();

    constructor(private communicatorService: CommunicatorService) { }

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

    removeAll(cartItem: CartItem): void {
        let index = this.productsInCart.findIndex(p => p.name === cartItem.name);
        cartItem.quantity = 0;
        if (index < 0) {
            console.log('Error!');
        } else {
            this.productsInCart.splice(index, 1);
            this.communicatorService.publishData(this.productsInCart);
        }
    }

    clearCart(): void {
        this.productsInCart.forEach(item => item.quantity = 0);
        this.productsInCart = new Array<CartItem>();
        this.communicatorService.publishData(this.productsInCart);
    }

    getTotalQuantity(): number {
        let totalQuantity: number = 0;
        this.productsInCart.forEach(item => totalQuantity += item.quantity);
        return totalQuantity;
    }

    getTotalSum(): number {
        let totalSum: number = 0;
        this.productsInCart.forEach(item => totalSum += item.price * item.quantity);
        return totalSum;
    }

}
