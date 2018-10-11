import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers: [ProductsService]
})
export class ShoppingComponent implements OnInit {
  allProducts: Promise<ProductModel[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.allProducts = this.productsService.getAllProducts();
  }

}
