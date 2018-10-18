import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../core/models/product.model';
import { ProductsPromiseService } from '../../services';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BookModel } from '../../../core/models/book.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: ProductModel;

  constructor(
    private productsPromiseService: ProductsPromiseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.product = new BookModel(null, '', '', 0, null, new Date(), true, 1);
    this.route.paramMap
      .pipe(
        switchMap(
          (params: Params) => this.productsPromiseService.getProduct(+params.get('productId'))))
      .subscribe(
        product => this.product = { ...product },
        err => console.log(err)
      );
  }

  onSave() {
    const product = { ...this.product };
    const method = product.id ? 'update' : 'create';
    this.productsPromiseService[method](product)
      .then(() => this.onGoBack())
      .catch(err => console.log(err));

  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }

}
