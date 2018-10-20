import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductModel } from 'src/app/core/models/product.model';
import { BookModel } from '../../core/models/book.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsPromiseService {
    private productsUrl = 'http://localhost:3000/products';

    constructor(private http: HttpClient) { }

    getAllProducts(): Promise<ProductModel[]> {
        return this.http
            .get(this.productsUrl)
            .toPromise()
            .then(response => this.toTypedModels(<ProductModel[]>response))
            .catch(this.handleError);
    }

    getProduct(id: number): Promise<ProductModel> {
        const url = `${this.productsUrl}/${id}`;

        return this.http
            .get(url)
            .toPromise()
            .then(response => this.toTypedModel(<ProductModel>response))
            .catch(this.handleError);
    }

    create(product: ProductModel): Promise<ProductModel> {
        const url = this.productsUrl,
            body = JSON.stringify(product),
            options = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };

        return this.http
            .post(url, body, options)
            .toPromise()
            .then(response => this.toTypedModel((<ProductModel>response)))
            .catch(this.handleError);
    }
    update(product: ProductModel): Promise<ProductModel> {
        const url = `${this.productsUrl}/${product.id}`,
            body = JSON.stringify(product),
            options = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            };

        return this.http
            .put(url, body, options)
            .toPromise()
            .then(response => this.toTypedModel(<ProductModel>response))
            .catch(this.handleError);
    }

    delete(product: ProductModel): Promise<ProductModel> {
        const url = `${this.productsUrl}/${product.id}`;

        return (
            this.http
                .delete(url)
                .toPromise()
                .catch(this.handleError)
        );
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
