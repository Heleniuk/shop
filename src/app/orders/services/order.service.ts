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
        if (existingOrders) {
            let newOrders = new Array<OrderModel>();
            newOrders.push(existingOrders);
            newOrders.push(order);
            this.localStorageService.setItem(this.constants.ORDERS_KEY, newOrders);
        } else {
            let newOrders = new Array<OrderModel>();
            newOrders.push(order);
            this.localStorageService.setItem(this.constants.ORDERS_KEY, order);
        }
    }

    getOrders(): OrderModel[] {
        let existingOrders = this.localStorageService.getItem(this.constants.ORDERS_KEY);
        if (!existingOrders) {
            return existingOrders;
        } else {
            if (existingOrders.length > 1) {
                return existingOrders;
            } else {
                let newOrders = new Array<OrderModel>();
                newOrders.push(existingOrders);
                return newOrders;
            }
        }
    }
}