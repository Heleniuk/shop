import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductModel } from 'src/app/core/models/product.model';
import { BookModel } from '../../core/models/book.model';
import { AppSettingsService } from '../../core/services/app-settings.service';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductsPromiseService {
    private productsUrl: string;

    constructor(
        private http: HttpClient,
        private appSettingsService: AppSettingsService
    ) { }

    getAllProducts(): Promise<ProductModel[]> {
        return this.productsUrl ? this.sendGetAllRequest() :
            this.appSettingsService.getSettings()
                .pipe(
                    tap(settings => {
                        this.productsUrl = settings.productsUrl;
                    }),
                    switchMap(
                        () => this.sendGetAllRequest()
                    )
                ).toPromise()
    }

    getProduct(id: number): Promise<ProductModel> {
        return this.productsUrl ? this.sendGetRequest(id) :
            this.appSettingsService.getSettings()
                .pipe(
                    tap(settings => {
                        this.productsUrl = settings.productsUrl;
                    }),
                    switchMap(
                        () => this.sendGetRequest(id)
                    )
                ).toPromise();
    }

    create(product: ProductModel): Promise<ProductModel> {
        return this.productsUrl ? this.sendCreateRequest(product) :
            this.appSettingsService.getSettings()
                .pipe(
                    tap(settings => {
                        this.productsUrl = settings.productsUrl;
                    }),
                    switchMap(
                        () => this.sendCreateRequest(product)
                    )
                ).toPromise();
    }

    update(product: ProductModel): Promise<ProductModel> {
        return this.productsUrl ? this.sendUpdateRequest(product) :
            this.appSettingsService.getSettings()
                .pipe(
                    tap(settings => {
                        this.productsUrl = settings.productsUrl;
                    }),
                    switchMap(
                        () => this.sendUpdateRequest(product)
                    )
                ).toPromise();
    }

    delete(product: ProductModel): Promise<ProductModel> {
        return this.productsUrl ? this.sendDeleteProductRequest(product) :
            this.appSettingsService.getSettings()
                .pipe(
                    tap(settings => {
                        this.productsUrl = settings.productsUrl;
                    }),
                    switchMap(
                        () => this.sendDeleteProductRequest(product)
                    )
                ).toPromise();
    }

    private sendDeleteProductRequest(product: ProductModel): Promise<ProductModel> {
        const url = `${this.productsUrl}/${product.id}`;

        return (
            this.http
                .delete<ProductModel>(url)
                .toPromise()
                .catch(this.handleError)
        );
    }

    private sendGetAllRequest(): Promise<ProductModel[]> {
        return this.http
            .get<ProductModel[]>(this.productsUrl)
            .toPromise()
            .then(response => this.toTypedModels(response))
            .catch(this.handleError)
    }

    private sendGetRequest(id: number): Promise<ProductModel> {
        const url = `${this.productsUrl}/${id}`;
        return this.http
            .get<ProductModel>(url)
            .toPromise()
            .then(response => this.toTypedModel(response))
            .catch(this.handleError);
    }

    private sendCreateRequest(product: ProductModel): any {
        const url = this.productsUrl,
            body = JSON.stringify(product),
            options = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };

        return this.http
            .post<ProductModel>(url, body, options)
            .toPromise()
            .then(response => this.toTypedModel(response))
            .catch(this.handleError);
    }

    private sendUpdateRequest(product: ProductModel): Promise<ProductModel> {
        const url = `${this.productsUrl}/${product.id}`,
            body = JSON.stringify(product),
            options = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            };

        return this.http
            .put<ProductModel>(url, body, options)
            .toPromise()
            .then(response => this.toTypedModel(response))
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private toTypedModel(raw: ProductModel): ProductModel {
        return new BookModel(
            raw.id,
            raw.name,
            raw.description,
            raw.price,
            raw.category,
            raw.isAvailable
        );
    }

    private toTypedModels(raw: ProductModel[]): ProductModel[] {
        return raw.map(p => this.toTypedModel(p));
    }
}
