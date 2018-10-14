import { Injectable } from "@angular/core";
import { BookModel } from "../../shared/models/book.model";
import { Category } from "../../shared/models/category.enum";
import { ProductModel } from "../../shared/models/product.model";

export const ALL_PRODUCTS = [
    new BookModel(1, 'Alphabet', 'A very interesting one, by the way', 100, Category.Luxury, new Date(), true, 0, ['Wonderful!', 'Beautiful!']),
    new BookModel(2, 'Bridge to English', 'A shitty one', 300, Category.Mainstream, new Date(), true, 0, ['Best Book ever!']),
    new BookModel(3, 'Doctor Faustus', 'Just OK', 200, Category.Business, new Date(), true, 0),
    new BookModel(4, 'The Matrix', 'Disabled', 600, Category.Mainstream, new Date(), false, 0, ['This is garbage.'])
];

@Injectable({providedIn: 'root'})
export class ProductsService {
    getAllProducts(): Promise<ProductModel[]> {
        return Promise.resolve(ALL_PRODUCTS);
    }
    getProduct(id: number): Promise<ProductModel> {
        return Promise.resolve(ALL_PRODUCTS.find(product => product.id === id));
    }
}
