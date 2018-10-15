import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { ProductModel } from '../../../shared/models/product.model';
import { CartItem } from '../../../shared/models/cart-item.model';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Promise<ProductModel[]>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

  onAddToCart(cartItem: CartItem): void {
    this.cartService.addToCart(cartItem);
  }

  showReviews(product: ProductModel): void {
    this.router.navigate([{ outlets: { reviews: ['reviews', product.id] } }]);
  }
}
