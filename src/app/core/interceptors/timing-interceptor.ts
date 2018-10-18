import { finalize, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const started = Date.now();

        return next.handle(req)
            .pipe(
                tap(
                    () => console.log('Sending a request...')
                ),
                finalize(() => console.log('Request time: ' + (Date.now() - started)))
            );
    }
}