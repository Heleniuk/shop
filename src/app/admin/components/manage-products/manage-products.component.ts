import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../../core/models/product.model';
import { ProductsPromiseService } from 'src/app/products';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: Promise<ProductModel[]>;

  constructor(
    private router: Router,
    private productsPromiseService: ProductsPromiseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.products = this.productsPromiseService.getAllProducts();
  }

  onAdd(): void {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  showReviews(product: ProductModel): void {
    this.router.navigate([{ outlets: { reviews: ['reviews', product.id] } }]);
  }

  onEdit(product: ProductModel): void {
    const link = ['edit', product.id];
    this.router.navigate(link, { relativeTo: this.route });
  }

  onDelete(product: ProductModel): void {
    this.productsPromiseService
      .delete(product)
      .then(() => (this.products = this.productsPromiseService.getAllProducts()))
      .catch(err => console.log(err));

  }

}
