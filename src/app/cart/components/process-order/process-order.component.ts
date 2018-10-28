import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerInfoModel } from '../../../core/models/customer-info.model';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from '../../../core/decorators';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {
  @Output()
  submitOrder: EventEmitter<CustomerInfoModel> = new EventEmitter();
  
  customer: CustomerInfoModel = new CustomerInfoModel('', '', '', null);
  customerForm: FormGroup;
  
  validationMessage: string;
  
  placeholders = {
    name: 'Name (required)',
    email: 'Email (required)',
    address: 'Address (required)',
    phone: 'Phone'
  };

  private validationMessages = {
    name: {
      required: 'Please enter your name.'
    },
    email: {
      required: 'Please enter your email address.',
      email: 'Please enter a valid email address.'
    },
    address: {
      required: 'Please enter your address.'
    }
  };
  private sub: Subscription;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  get phones() {
    return this.customerForm.get('phones') as FormArray;
  }

  addPhone() {
    this.phones.push(this.fb.control(''));
  }

  onSubmitButtonClick(): void {
    //this.submitOrder.emit(this.customer);
  }

  private buildForm() {
    this.customerForm = this.fb.group({
      name: new FormControl('', { validators: [Validators.required], updateOn: 'blur' }),
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phones: this.fb.array([
        this.fb.control('')
      ])
    });
  }

}
