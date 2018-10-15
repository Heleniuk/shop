import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../../../core/models/product.model';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: Promise<ProductModel[]>;

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

  onAdd(): void {
    this.router.navigate(['/add']);
  }

  showReviews(product: ProductModel): void {
    this.router.navigate([{ outlets: { reviews: ['reviews', product.id] } }]);
  }

  onEdit(product: ProductModel): void {
    const link = ['/edit', product.id];
    this.router.navigate(link);
  }

  onDelete(product: ProductModel): void {
    this.productsService.delete(product);
  }

}
