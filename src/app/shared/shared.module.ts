import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './pipes/order-by.pipe';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderByPipe,
    PathNotFoundComponent
  ],
  exports: [
    OrderByPipe,
    PathNotFoundComponent
  ]
})
export class SharedModule { }
