import { HttpRequest } from "@angular/common/http";
import { Predicate } from "@angular/core";

export function Filtered(filterFunction: Predicate<HttpRequest<any>>) {
    return function (constructor) {
        constructor.prototype.filter = filterFunction;
    };
}