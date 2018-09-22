import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers: [CartService, ProductsService]
})
export class ShoppingComponent implements OnInit {
  productsInCart: Array<ProductModel>;
  allProducts: Array<ProductModel>;

  constructor(
    private cartService: CartService,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.productsInCart = this.cartService.getProductsInCart();
    this.allProducts = this.productsService.getProducts();
  }

  onAddToCart(product: ProductModel) {
    this.cartService.addToCart(product);
  }

  onRemoveFromCart(product: ProductModel) {
    this.cartService.removeFromCart(product);
  }

}
