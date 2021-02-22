import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  countries = [
    {id: 1, name: "Vatican", url: "../../../assets/Vatican.jpg"},
    {id: 2, name: "Ghana", url: "../../../assets/Ghana.jpg"},
    {id: 3, name: "Montenegro", url: "../../../assets/Montenegro.jpg"},
    {id: 4, name: "Nimibia", url: "../../../assets/Namibia.jpg"},
    {id: 5, name: "Ethiopia", url: "../../../assets/Ethiopia.jpg"}
  ]
  constructor() { }
  getCountries(){
    return this.countries;
  }
}
