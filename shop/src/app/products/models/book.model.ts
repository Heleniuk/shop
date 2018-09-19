import { ProductModel } from "./product.model";
import { Category } from "./category.enum";


export class BookModel implements ProductModel {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    reviews: string[];
    isInCart: boolean;

    constructor(name: string, description: string, price: number, category: Category) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.isAvailable = true;
        this.reviews = ['Nice book!', 'Just fine.'];
    }
}
