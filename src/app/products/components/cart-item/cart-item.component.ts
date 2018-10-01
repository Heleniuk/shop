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
  addToCart: EventEmitter<ProductModel> = new EventEmitter();
  @Output()
  removeFromCart: EventEmitter<ProductModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddToCart(product: ProductModel): void {
    this.cartItem.quantity++;
    this.addToCart.emit(product);
  }

  onRemoveFromCart(product: ProductModel): void {
    this.cartItem.quantity--;
    this.removeFromCart.emit(product);
  }
}
