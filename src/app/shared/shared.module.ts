import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './pipes/order-by.pipe';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderByPipe,
    PathNotFoundComponent,
    LoginComponent
  ],
  exports: [
    OrderByPipe,
    PathNotFoundComponent,
    LoginComponent
  ]
})
export class SharedModule { }
