import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {


  transform(value: any[] | null, key: string, direction: boolean, key2?: string): any[] | null {

    if (!Array.isArray(value) || !key) {
      return value;
    }

    if (!direction) {
      return value.sort(function(a, b): number {
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {
          return a[key] - b[key];
        } else if (key2) {
          return a[key][key2].toString().toLowerCase().localeCompare(b[key][key2].toString().toLowerCase());
        } else {
          return a[key].toString().toLowerCase().localeCompare(b[key].toString().toLowerCase());
        }
      });
    } else {
      return value.sort(function(a, b): number {
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {
          return b[key] - a[key];
        } else if (key2) {
          return b[key][key2].toString().toLowerCase().localeCompare(a[key][key2].toString().toLowerCase());
        } else {
          return b[key].toString().toLowerCase().localeCompare(a[key].toString().toLowerCase());
        }
      });
    }
  }
}
