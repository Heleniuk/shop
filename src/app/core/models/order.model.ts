import { CartItem } from "./cart-item.model";

export class OrderModel {
    constructor(
        public customerName: string,
        public customerAddress: string,
        public items: CartItem[],
        public totalSum: number
    ) {}
}