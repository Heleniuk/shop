import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  productsInCart: Array<ProductModel>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.productsInCart = this.cartService.getProductsInCart();
  }

  onAddToCart(product: ProductModel) {
    console.log('CartComponent: Added to Cart!');
    this.cartService.addToCart(product);
  }

  isCartNotEmpty(): boolean {
    return this.productsInCart.length > 0;
  }

}
