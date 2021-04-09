import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showLatestFive'
})
export class ShowLatestFivePipe implements PipeTransform {

  transform(value: any[] | null): any[] | null {
    if (!Array.isArray(value)) { return value }
    return value.slice(value?.length - 5, value?.length);
  }

}
