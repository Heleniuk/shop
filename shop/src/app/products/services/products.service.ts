import { Injectable } from "@angular/core";
import { ProductModel } from "../models/product.model";
import { BookModel } from "../models/book.model";
import { Category } from "../models/category.enum";

@Injectable()
export class ProductsService {

    getProducts(): ProductModel[] {
        return [
            new BookModel('A Book', 'A very interesting one, by the way', 100, Category.Luxury),
            new BookModel('Another Book', 'A shitty one', 300, Category.Mainstream),
            new BookModel('And A Book Again', 'Just OK', 200, Category.Business)
        ];
    }
}