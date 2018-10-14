import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { CartItem } from '../../../shared/models/cart-item.model';
import { CommunicatorService } from '../../../shared/services/communicator.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  productsInCart: Array<CartItem> = new Array<CartItem>();
  totalSum: number = 0;
  orderByField: string = 'price';
  ascending: boolean = false;

  constructor(
    private cartService: CartService,
    private communicatorService: CommunicatorService
  ) { }

  ngOnInit() {
    this.sub = this.communicatorService.channel$.subscribe(
      data => {
      this.productsInCart = data;
        this.totalSum = this.cartService.getTotalSum();
      }
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onAddToCart(cartItem: CartItem): void {
    this.cartService.addToCart(cartItem);
  }

  onRemoveFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem);
  }

  onRemoveAll(cartItem: CartItem): void {
    this.cartService.removeAll(cartItem);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onOrderByClick(element: HTMLElement) {
    this.orderByField = element.textContent.toLowerCase();
  }

  isCartNotEmpty(): boolean {
    return this.productsInCart.length > 0;
  }

}