import { ProductModel } from "./product.model";
import { Category } from "./category.enum";
import { CartItem } from "./cart-item.model";


export class BookModel implements ProductModel, CartItem {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public isAvailable: boolean,
        public quantity: number,
        public reviews?: string[]
    ) {
        this.isAvailable = isAvailable;
        this.reviews = reviews || ['Nice book!', 'Just fine.'];
    }
}
