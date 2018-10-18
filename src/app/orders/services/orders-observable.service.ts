import { Injectable, Inject } from "@angular/core";
import { OrderModel } from "../../core/models/order.model";
import { OrdersAPI } from "../orders.config";
import { Observable, throwError } from "rxjs";
import { catchError, concatMap } from "rxjs/operators";
import { HttpErrorResponse, HttpHeaders, HttpClient } from "@angular/common/http";
import { OrdersModule } from "../orders.module";

@Injectable({ providedIn: 'root' })
export class OrdersObservableService {
  constructor(
    private http: HttpClient,
    @Inject(OrdersAPI) private ordersUrl: string
  ) { }

  submit(order: OrderModel): Observable<OrderModel> {
    const url = this.ordersUrl,
        body = JSON.stringify(order),
        options = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
       return this.http
          .post<OrderModel>(url, body, options)
          .pipe(
            catchError( this.handleError )
          );
  }

  getAllOrders(): Observable<OrderModel[]> {
    return this.http
      .get<OrderModel[]>(this.ordersUrl)
      .pipe(catchError(this.handleError));
  }

  getOrder(id: number): Observable<OrderModel> {
    const url = `${this.ordersUrl}/${id}`;

    return this.http.get<OrderModel>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(order: OrderModel): Observable<OrderModel[]> {
    const url = `${this.ordersUrl}/${order.id}`;

    return this.http.delete(url)
      .pipe(
        concatMap(() => this.getAllOrders())
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;

    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}, body was: ${
        err.error
        }`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}