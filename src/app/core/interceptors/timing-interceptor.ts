import { finalize, tap, filter } from 'rxjs/operators';
import { Injectable, Predicate } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Filtered } from '../decorators/filter.decorator';

@Injectable()
@Filtered((request) => request.method === 'GET')
export class TimingInterceptor implements HttpInterceptor {
    private filter: Predicate<HttpRequest<any>>
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log(request.method);
        if (this.filter && this.filter.apply(this, [request])) {
            const started = Date.now();
            return next.handle(request)
                .pipe(
                    tap(
                        () => console.log('Sending a request...')
                    ),
                    finalize(
                        () => console.log('Request time: ' + (Date.now() - started))
                    )
                );
        } else {
            console.log('Skipping a filtered out request');
            return next.handle(request);
        }
    }
}