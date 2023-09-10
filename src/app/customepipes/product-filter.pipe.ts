import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[] ,  searchQuery: string): Product[] {
    console.log("here");
    if(!searchQuery || searchQuery.trim() == ''){
      return products;
    }
    else{
      return products.filter(product => product.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()));
    }
  }

}
