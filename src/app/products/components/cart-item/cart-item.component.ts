import { Component, OnInit, Output, EventEmitter, Input, HostBinding, HostListener, ElementRef, Renderer } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';

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
  @Output()
  removeAll: EventEmitter<CartItem> = new EventEmitter();

  constructor(private renderer: Renderer) { }

  ngOnInit() { }

  @HostBinding('class')
  className = 'bold';

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(element: Event) {
    this.renderer.setElementClass(event.target, 'headingClass', true);
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    this.renderer.setElementClass(event.target, 'headingClass', false);
  }

  onAddToCart(cartItem: CartItem): void {
    this.addToCart.emit(cartItem);
  }

  onRemoveFromCart(cartItem: CartItem): void {
    this.removeFromCart.emit(cartItem);
  }

  onRemoveAll(cartItem: CartItem): void {
    this.removeAll.emit(cartItem);
  }
}
