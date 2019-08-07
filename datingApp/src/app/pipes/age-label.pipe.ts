import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'ageLabel'
})

export class MyAgeLabel implements PipeTransform{
    transform(value: String, varAgeLabel: String): String {
        return varAgeLabel + ' ' + value;
    }
}