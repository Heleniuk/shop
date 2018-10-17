import { ProductModel } from "./product.model";
import { Category } from "./category.enum";
import { CartItem } from "./cart-item.model";


export class BookModel implements ProductModel, CartItem {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public createdDate: Date,
        public isAvailable: boolean,
        public quantity: number,
        public reviews?: string[]
    ) {
        this.createdDate = createdDate || new Date();
        this.reviews = reviews || ['No reviews yet'];
    }
}
