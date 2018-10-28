import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { CartItem } from '../../../core/models/cart-item.model';
import { CommunicatorService } from '../../../core/services/communicator.service';
import { OrderModel } from '../../../core/models/order.model';
import { OrdersObservableService } from 'src/app/orders/services';
import { CustomerInfoModel } from '../../../core/models/customer-info.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  productsInCart: Array<CartItem> = new Array<CartItem>();
  totalSum: number = 0;
  orderByField: string = 'price';
  ascending: boolean = false;

  constructor(
    private cartService: CartService,
    private ordersObservableService: OrdersObservableService,
    private communicatorService: CommunicatorService
  ) { }

  ngOnInit() {
    this.init();
    this.sub = this.communicatorService.channel$.subscribe(
      data => {
        this.productsInCart = data;
        this.totalSum = this.cartService.getTotalSum();
      }
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onAddToCart(cartItem: CartItem): void {
    this.cartService.addToCart(cartItem);
  }

  onRemoveFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem);
  }

  onRemoveAll(cartItem: CartItem): void {
    this.cartService.removeAll(cartItem);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onOrderByClick(element: HTMLElement) {
    this.orderByField = element.textContent.toLowerCase();
  }

  onSubmitOrder(customer: CustomerInfoModel): void {
    let order = new OrderModel(
      customer,
      this.productsInCart,
      this.totalSum
    );
    this.ordersObservableService.submit(order)
      .subscribe(
        () => {
          this.cartService.clearCart();
        },
        error => console.log(error)
      );
  }

  isCartNotEmpty(): boolean {
    return this.productsInCart.length > 0;
  }

  private init(): void {
    this.productsInCart = this.cartService.productsInCart;
    this.totalSum = this.cartService.getTotalSum();
  }

}
