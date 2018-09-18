import { Injectable } from "@angular/core";
import { ProductModel } from "./product.model";
import { BookModel } from "./book.model";
import { Category } from "./category.enum";

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
