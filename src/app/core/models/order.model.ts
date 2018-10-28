import { CartItem } from "./cart-item.model";
import { CustomerInfoModel } from "./customer-info.model";

export class OrderModel {
    constructor(
        public customerInfo: CustomerInfoModel,
        public items: CartItem[],
        public totalSum: number,
        public id?: number
    ) {}
}