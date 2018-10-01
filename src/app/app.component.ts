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
    (<HTMLElement>this.title.nativeElement).textContent = 'Welcome!'
  }
}
