import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Array<ProductModel>;
  @Output()
  addToCart: EventEmitter<ProductModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onAddButtonClick(product: ProductModel): void {
    this.addToCart.emit(product);
  }

}
