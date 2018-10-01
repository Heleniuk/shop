import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('appTitle') 
  title: ElementRef;

  ngAfterViewInit() {
    (<HTMLInputElement>this.title.nativeElement).textContent = 'Welcome!'
  }
}
