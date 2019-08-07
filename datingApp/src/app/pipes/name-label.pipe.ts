import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'nameLabel'
})

export class MyNameLabel implements PipeTransform{
    transform(value: String, varNameLabel: String): String {
        return varNameLabel + ' ' + value;
    }
}