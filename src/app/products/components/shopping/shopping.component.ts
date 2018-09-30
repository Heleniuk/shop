import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import { CartItem } from '../../models/cart-item.model';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers: [CartService, ProductsService]
})
export class ShoppingComponent implements OnInit {
  allProducts: Array<ProductModel>;
  productsInCart: Observer<Array<CartItem>>;

  constructor(private cartService: CartService,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.allProducts = this.productsService.getAllProducts();
    this.productsInCart = this.cartService.getCartItems();
  }

  onAddToCart(product: ProductModel) {
    this.cartService.addToCart(product);
  }

  onRemoveFromCart(product: ProductModel): void {
    this.cartService.removeFromCart(product);
  }

}
