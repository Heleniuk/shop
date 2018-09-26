import { ProductModel } from "./product.model";
import { Category } from "./category.enum";


export class BookModel implements ProductModel {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public isAvailable?: boolean,
        public reviews?: string[]
    ) {
        this.isAvailable = isAvailable || true;
        this.reviews = reviews || ['Nice book!', 'Just fine.'];
    }
}
