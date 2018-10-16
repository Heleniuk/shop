import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'orderBy',
    pure: false
})
export class OrderByPipe implements PipeTransform {
    transform(value: Object[], field: string, asc: boolean): Object[] {
        return value.sort( asc ?
            (a, b) => this.comparator(a[field], b[field])
            : (a, b) => this.comparator(b[field], a[field]));    
    }

    private comparator = function(a, b) {
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    }
}