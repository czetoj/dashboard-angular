import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';

@Pipe({
  name: 'featured'
})
export class FeaturedPipe implements PipeTransform {

  transform(productList$: Product[] | null, featured: boolean): Product[] | null {
    if (!Array.isArray(productList$) || !featured) {
      return productList$
    }
    return productList$.filter(item => featured === item.featured)
  }

}