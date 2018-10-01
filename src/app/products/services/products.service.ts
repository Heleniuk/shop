import { Injectable } from "@angular/core";
import { ProductModel } from "../models/product.model";
import { BookModel } from "../models/book.model";
import { Category } from "../models/category.enum";
import { CartItem } from "../models/cart-item.model";

@Injectable()
export class ProductsService {
    getAllProducts(): ProductModel[] {
        return [
            new BookModel('A Book', 'A very interesting one, by the way', 100, Category.Luxury, true, 0),
            new BookModel('Another Book', 'A shitty one', 300, Category.Mainstream, true, 0),
            new BookModel('And A Book Again', 'Just OK', 200, Category.Business, true, 0),
            new BookModel('A Bestseller', 'Disabled', 600, Category.Mainstream, false, 0)
        ];
    }
}
