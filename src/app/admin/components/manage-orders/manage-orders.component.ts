import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../../core/models/order.model';
import { OrdersObservableService } from '../../../orders/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  orders$: Observable<OrderModel[]>;

  constructor(private ordersObservableService: OrdersObservableService) { }

  ngOnInit() {
    this.orders$ = this.ordersObservableService.getAllOrders();
  }

}
