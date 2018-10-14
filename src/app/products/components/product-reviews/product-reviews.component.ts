import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {
  product: ProductModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.productsService.getProduct(+params.get('productId'))))
      .subscribe(
        product => this.product = {...product},
        err => console.log(err)
    );
  }

  closePopup() {
    this.router.navigate([{ outlets: { reviews: null }}]);
  }

}
