import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[] | null, key: string, phrase: string | number | boolean, key2?: string): any[] | null {
    if (!Array.isArray(value) || !key || !phrase) {
      return value;
    }

    phrase = typeof phrase !== 'number' ? ('' + phrase).toLowerCase() : phrase;

    return value.filter(item => {
      if (typeof item[key] === 'number' && typeof phrase === 'number') {
        return item[key] === phrase;
      } else if (key2 && key == 'address') {
        return ('' + item[key][key2]).toLowerCase().includes((phrase as string));
      }
      return ('' + item[key]).toLowerCase().includes((phrase as string));
    });
  }

}
