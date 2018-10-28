import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerInfoModel } from '../../../core/models/customer-info.model';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from '../../../core/decorators';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
@AutoUnsubscribe()
export class CustomerInfoComponent implements OnInit {
  @Output()
  submitOrder: EventEmitter<CustomerInfoModel> = new EventEmitter();
  customerForm: FormGroup;

  validationMessages = {
    name: '',
    email: '',
    address: ''
  }

  placeholders = {
    name: 'Name (required)',
    email: 'Email (required)',
    address: 'Address (required)',
    phone: 'Phone'
  };

  private validationMessagesMap = {
    name: {
      required: 'Please enter your name.'
    },
    email: {
      required: 'Please enter your email.',
      email: 'Please enter a valid email.'
    },
    address: {
      required: 'Please enter your address.'
    }
  };
  private sub: Subscription;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.watchValueChanges();
  }

  get phones() {
    return this.customerForm.get('phones') as FormArray;
  }

  addPhone() {
    this.phones.push(this.fb.control(''));
  }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }

  onSubmitButtonClick(): void {
    this.submitOrder.emit(this.customerForm.value);
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

  private watchValueChanges() {
    const nameControl = this.customerForm.get('name');
    const emailControl = this.customerForm.get('email');
    const addressControl = this.customerForm.get('address');
    
    this.sub = nameControl.valueChanges
      .subscribe(value =>
        this.setValidationMessage(nameControl, 'name')
      );
    const emailSub = emailControl.valueChanges
      .subscribe(value =>
        this.setValidationMessage(emailControl, 'email')
    );
    const addressSub = addressControl.valueChanges
      .subscribe(value =>
        this.setValidationMessage(addressControl, 'address')
    );
    this.sub.add(emailSub);
    this.sub.add(addressSub);
  }

  private setValidationMessage(c: AbstractControl, controlName: string) {
    this.validationMessages[controlName] = '';

    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessages[controlName] = Object.keys(c.errors)
        .map(key => this.validationMessagesMap[controlName][key])
        .join(' ');
    }
  }

  onBlur(controlName: string) {
    const control = this.customerForm.get(controlName);
    this.setValidationMessage(control, controlName);
  }

}
