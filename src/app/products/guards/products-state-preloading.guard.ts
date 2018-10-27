import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/+store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { checkStore } from './check-store.function';
import { ProductsModule } from '../products.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsStatePreloadingGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(): Observable<boolean> {
    return checkStore(this.store).pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}