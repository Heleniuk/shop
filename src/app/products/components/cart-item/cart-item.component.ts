import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input()
  cartItem: CartItem;
  @Output()
  addToCart: EventEmitter<CartItem> = new EventEmitter();
  @Output()
  removeFromCart: EventEmitter<CartItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddToCart(cartItem: CartItem): void {
    this.addToCart.emit(cartItem);
  }

  onRemoveFromCart(cartItem: CartItem): void {
    this.removeFromCart.emit(cartItem);
  }
}
