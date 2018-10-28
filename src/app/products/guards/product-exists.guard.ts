import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, getProductsData } from '../../core/+store';
import * as RouterActions from '../../core/+store/router/router.actions';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

import { checkStore } from './check-store.function';

@Injectable({
  providedIn: 'root'
})
export class ProductExistsGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return checkStore(this.store).pipe(
      switchMap(() => {
        const id = +route.paramMap.get('productId');
        return this.hasProduct(id);
      })
    );
  }

  private hasProduct(id: number): Observable<boolean> {
    return this.store.pipe(
      select(getProductsData),
      map(products => !!products.find(product => product.id === id)),
      tap(result => {
        if (!result) {
          this.store.dispatch(new RouterActions.Go({ path: ['/products'] }));
        }
      }),
      take(1)
    );
  }
}