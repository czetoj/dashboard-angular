import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagi'
})
export class PagiPipe implements PipeTransform {

  pagesNumber: number[] = [];

  transform(value: any[], length: number, pagiLength: number): number[] {

    this.pagesNumber = [];

    if (!length) {
      return [];
    }

    for (let i = 1; i <= Math.ceil(length / pagiLength); i++) {
      this.pagesNumber.push(i);
    }

    return this.pagesNumber;
  }

}
