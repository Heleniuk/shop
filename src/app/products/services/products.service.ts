import { Injectable } from "@angular/core";
import { BookModel } from "../../core/models/book.model";
import { Category } from "../../core/models/category.enum";
import { ProductModel } from "../../core/models/product.model";

export const ALL_PRODUCTS = [
    new BookModel(1, 'Alphabet', 'A very interesting one, by the way', 100, Category.Luxury, true),
    new BookModel(2, 'Bridge to English', 'A shitty one', 300, Category.Mainstream, true),
    new BookModel(3, 'Doctor Faustus', 'Just OK', 200, Category.Business, true),
    new BookModel(4, 'The Matrix', 'Disabled', 600, Category.Mainstream, false)
];

@Injectable({ providedIn: 'root' })
export class ProductsService {
    products: Array<ProductModel> = ALL_PRODUCTS;

    getAllProducts(): Promise<ProductModel[]> {
        return Promise.resolve(this.products);
    }

    getProduct(id: number): Promise<ProductModel> {
        return Promise.resolve(this.products.find(product => product.id === id));
    }

    create(product: ProductModel): void {
        product.id = this.nextId();
        this.products.push(product);
    }

    update(product: ProductModel): void {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index > -1) {
            this.products.splice(index, 1, product);
        }
    }

    delete(product: ProductModel): void {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }

    private nextId(): number {
        return this.products.sort((a, b) => b.id - a.id)[0].id + 1;
    }
}
