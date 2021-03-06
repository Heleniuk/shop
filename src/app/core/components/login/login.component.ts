import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from './../../../core/+store';
import * as RouterActions from './../../../core/+store/router/router.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  message: string;
  private unsubscribe: Subject<void> = new Subject();

  constructor(public authService: AuthService,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.setMessage();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onLogin() {
    this.message = 'Trying to log in ...';
    this.authService
      .login()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        () => {
          this.setMessage();
          if (this.authService.isLoggedIn) {
            const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
            this.store.dispatch(new RouterActions.Go({
              path: [redirect]
            }));
          }
        },
        err => console.log(err)
      );
  }

  onLogout() {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
}
