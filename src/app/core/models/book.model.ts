import { ProductModel } from "./product.model";
import { Category } from "./category.enum";
import { CartItem } from "./cart-item.model";


export class BookModel implements ProductModel, CartItem {
    createdDate: Date = new Date();
    quantity: number = 0;
    reviews? = ['No reviews yet'];

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public isAvailable: boolean
    ) { };
}
