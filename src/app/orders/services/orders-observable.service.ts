import { Injectable, Inject } from "@angular/core";
import { OrderModel } from "../../core/models/order.model";
import { Observable, throwError } from "rxjs";
import { catchError, concatMap, tap, switchMap } from "rxjs/operators";
import { HttpErrorResponse, HttpHeaders, HttpClient } from "@angular/common/http";
import { AppSettingsService } from "../../core/services/app-settings.service";

@Injectable({ providedIn: 'root' })
export class OrdersObservableService {
  private ordersUrl: string;

  constructor(
    private http: HttpClient,
    private appSettingsService: AppSettingsService
  ) { }

  submit(order: OrderModel): Observable<OrderModel> {
    return this.ordersUrl ? this.sendSubmitRequest(order) :
      this.appSettingsService.getSettings()
        .pipe(
          tap(
            settings => {
              this.ordersUrl = settings.ordersUrl;
            }),
          switchMap(
            () => this.sendSubmitRequest(order)
          )
        )
  }

  getAllOrders(): Observable<OrderModel[]> {
    return this.ordersUrl ? this.sendGetAllRequest() :
      this.appSettingsService.getSettings()
        .pipe(
          tap(
            settings => {
              this.ordersUrl = settings.ordersUrl;
            }),
          switchMap(
            () => this.sendGetAllRequest()
          )
        )
  }

  getOrder(id: number): Observable<OrderModel> {
    return this.ordersUrl ? this.sendGetRequest(id) :
      this.appSettingsService.getSettings()
        .pipe(
          tap(
            settings => {
              this.ordersUrl = settings.ordersUrl;
            }),
          switchMap(
            () => this.sendGetRequest(id)
          )
        )
  }

  delete(order: OrderModel): Observable<OrderModel[]> {
    return this.ordersUrl ? this.sendDeleteRequest(order.id) :
      this.appSettingsService.getSettings()
        .pipe(
          tap(
            settings => {
              this.ordersUrl = settings.ordersUrl;
            }),
          switchMap(
            () => this.sendDeleteRequest(order.id)
          )
        )
  }

  private sendSubmitRequest(order: OrderModel): Observable<OrderModel> {
    const url = this.ordersUrl,
      body = JSON.stringify(order),
      options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    return this.http
      .post<OrderModel>(url, body, options)
      .pipe(
        catchError(this.handleError)
      );
  }


  private sendGetAllRequest(): Observable<OrderModel[]> {
    return this.http
      .get<OrderModel[]>(this.ordersUrl)
      .pipe(catchError(this.handleError));
  }


  private sendGetRequest(id: number): Observable<OrderModel> {
    const url = `${this.ordersUrl}/${id}`;

    return this.http.get<OrderModel>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private sendDeleteRequest(id: any): Observable<OrderModel[]> {
    const url = `${this.ordersUrl}/${id}`;

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