import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../core/models/product.model';
import { Store, select } from '@ngrx/store';
import { AppState, getSelectedProductByUrl } from '../../../core/+store';
import { Subscription } from 'rxjs';
import * as RouterActions from './../../../core/+store/router/router.actions';
import { AutoUnsubscribe } from '../../../core/decorators';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
@AutoUnsubscribe()
export class ProductReviewsComponent implements OnInit {
  product: ProductModel;
  private sub: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.sub = this.store
    .pipe(select(getSelectedProductByUrl))
    .subscribe(product => this.product = product);
  }

  closePopup() {
    this.store.dispatch(new RouterActions.Go({
      path: [{ outlets: { reviews: ['reviews', null] } }]
    }));
  }

}
