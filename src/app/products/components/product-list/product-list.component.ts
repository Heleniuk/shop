import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { ProductsPromiseService } from '../../services';
import { Router } from '@angular/router';
import { ProductModel } from '../../../core/models/product.model';
import { CartItem } from '../../../core/models/cart-item.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Promise<ProductModel[]>;

  constructor(
    private productsPromiseService: ProductsPromiseService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.productsPromiseService.getAllProducts();
  }

  onAddToCart(cartItem: CartItem): void {
    this.cartService.addToCart(cartItem);
  }

  showReviews(product: ProductModel): void {
    this.router.navigate([{ outlets: { reviews: ['reviews', product.id] } }]);
  }

}
