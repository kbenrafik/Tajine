import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatPrice'
})


export class FormatPrice implements PipeTransform {

        transform(value : string, param){
            console.info(param)

            return value + param;
        }
}