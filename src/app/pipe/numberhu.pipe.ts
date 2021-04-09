import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberhu'
})
export class NumberhuPipe implements PipeTransform {

  transform(value: number): string {
    if (value !== undefined && value !== null) {
      return value.toLocaleString('hu-HU');
    } else {
      return '';
    }
  }

}
