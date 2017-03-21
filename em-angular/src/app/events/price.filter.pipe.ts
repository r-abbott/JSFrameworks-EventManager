import { PipeTransform, Pipe } from '@angular/core';
import { CurrencyPipe } from '@angular/common';


@Pipe({
    name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

    constructor(private currencyPipe:CurrencyPipe){}

    transform(value: number) : string {
        return value > 0 ? this.currencyPipe.transform(value,'USD',true,'1.2-2') : "FREE";
    }
}