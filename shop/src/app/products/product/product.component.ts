import { Component, OnInit } from '@angular/core';

import { Category } from '../category.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  reviews: string[];

  constructor() { }

  ngOnInit() {
    this.name = 'A Book';
    this.description = 'A very interesting one, by the way';
    this.price = 100;
    this.category = Category.Business;
    this.isAvailable = true;
    this.reviews = ['Perfect!', 'Wonderful!'];
  }

  onBuyButtonClick(): void {
    console.log('The Product has been bought!');
  }

}
