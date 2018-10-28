import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerInfoModel } from '../../../core/models/customer-info.model';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {
  @Output()
  submitOrder: EventEmitter<CustomerInfoModel> = new EventEmitter();

  name: string = '';
  email: string = '';
  address: string = '';
  phones: string[];

  constructor() { }

  ngOnInit() {
  }

  onSubmitButtonClick(): void {
    this.submitOrder.emit(
        new CustomerInfoModel(
          this.name, 
          this.email, 
          this.address, 
          this.phones
        )
      );
  }

}
