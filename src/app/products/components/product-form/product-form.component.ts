import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../core/models/product.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: ProductModel;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(
          (params: Params) => this.productService.getProduct(+params.get('productId'))))
      .subscribe(
        product => this.product = { ...product },
        err => console.log(err)
      );
  }

  onSave() {
    const product = { ...this.product };
    if (product.id) {
      this.productService.update(product);
    } else {
      this.productService.create(product);
    }
    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/admin']);
  }

}