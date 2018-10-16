import { Injectable } from "@angular/core";
import { OrderModel } from "../../core/models/order.model";
import { LocalStorageService } from "../../core/services/local-storage.service";
import { ConstantsService } from "../../core/services/constants.service";

@Injectable({ providedIn: 'root' })
export class OrderService {
    constructor(
        private localStorageService: LocalStorageService,
        private constants: ConstantsService
    ) { }

    submit(order: OrderModel): void {
        let existingOrders = this.localStorageService.getItem(this.constants.ORDERS_KEY);
        if (!existingOrders) {
            this.localStorageService.setItem(
                this.constants.ORDERS_KEY,
                this.wrapToArray(order)
            );
        } else {
            let newOrders = new Array<OrderModel>();
            for (let i = 0; i < existingOrders.length; i++) {
                newOrders.push(existingOrders[i]);
            }
            newOrders.push(order);
            this.localStorageService.setItem(this.constants.ORDERS_KEY, newOrders);
        }
    }

    getOrders(): OrderModel[] {
        return this.localStorageService.getItem(this.constants.ORDERS_KEY);
    }

    private wrapToArray(order: OrderModel): Array<OrderModel> {
        let newOrders = new Array<OrderModel>();
        newOrders.push(order);
        return newOrders;
    }
}