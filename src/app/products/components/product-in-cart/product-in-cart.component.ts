import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.css']
})
export class ProductInCartComponent implements OnInit {
  @Input()
  productInCart: ProductModel;

  constructor() { }

  ngOnInit() {
  }
  
}
