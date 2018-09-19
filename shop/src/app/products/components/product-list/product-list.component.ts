import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Array<ProductModel>;

  @Output()
  addToCart: EventEmitter<ProductModel> = new EventEmitter();

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    if (!this.products) {
      this.products = this.productsService.getProducts();
    }
  }

  onBuyButtonClick(product: ProductModel): void {
    this.addToCart.emit(product);
    console.log('The Product ' + product.name + ' has been bought!');
  }

}
