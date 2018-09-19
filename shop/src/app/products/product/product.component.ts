import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../category.enum';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: ProductModel;
  constructor() { }

  ngOnInit() {}

  onBuyButtonClick(): void {
    console.log('The Product' + this.product.name + 'has been bought!');
  }

}
