import { Injectable } from "@angular/core";
import { BookModel } from "../../shared/models/book.model";
import { Category } from "../../shared/models/category.enum";
import { ProductModel } from "../../shared/models/product.model";


export const ALL_PRODUCTS = [
    new BookModel('Alphabet', 'A very interesting one, by the way', 100, Category.Luxury, new Date(), true, 0),
    new BookModel('Bridge to English', 'A shitty one', 300, Category.Mainstream, new Date(), true, 0),
    new BookModel('Doctor Faustus', 'Just OK', 200, Category.Business, new Date(), true, 0),
    new BookModel('The Matrix', 'Disabled', 600, Category.Mainstream, new Date(), false, 0)
];

@Injectable({providedIn: 'root'})
export class ProductsService {
    getAllProducts(): Promise<ProductModel[]> {
        return Promise.resolve(ALL_PRODUCTS);
    }
}
