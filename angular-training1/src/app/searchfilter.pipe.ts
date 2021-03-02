import {Country } from './country'

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(countries: Country[], searchValue: string): Country[] {
    if(!countries || !searchValue){
      return countries;
    }
    return countries.filter(country =>country.name.toLocaleLowerCase()
    .includes(searchValue.toLocaleLowerCase()))
  }

}
