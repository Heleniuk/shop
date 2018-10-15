import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../../../core/models/cart-item.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input()
  item: CartItem;
  constructor() { }

  ngOnInit() {
  }

}
