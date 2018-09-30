import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  @Input()
  productsInCart: Array<CartItem>;
  @Output()
  removeFromCart: EventEmitter<ProductModel> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onRemoveFromCart(product: ProductModel): void {
    this.removeFromCart.emit(product);
  }

  isCartNotEmpty(): boolean {
    return this.productsInCart.length > 0;
  }

}
