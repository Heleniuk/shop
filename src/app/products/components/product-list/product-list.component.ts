import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ProductModel } from '../../../core/models/product.model';
import { CartItem } from '../../../core/models/cart-item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input()
  isAdmin: boolean;
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

  onEdit(product: ProductModel): void {
    const link = ['/edit', product.id];
    this.router.navigate(link);
  }

  onDelete(product: ProductModel): void {
    this.productsService.delete(product);
  }

}
