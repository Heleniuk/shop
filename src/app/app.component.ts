import { Component, ViewChild, ElementRef } from '@angular/core';
import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('appTitle') 
  title: ElementRef;

  ngAfterViewInit() {
    (<HTMLElement>this.title.nativeElement).textContent = 'Welcome!'
  }

  constructor(public cartService: CartService) {
  }
}
