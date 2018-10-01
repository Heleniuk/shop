import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Array<ProductModel>;
 
  constructor(private cartService: CartService) {}

  ngOnInit() {}

  onAddToCart(cartItem: CartItem): void {
    this.cartService.addToCart(cartItem);
  }
}
