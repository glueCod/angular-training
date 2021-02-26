import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  data: any = [];
  countries:any = [];
  countryImage = [
    {name: "VA", url: "../../../assets/Vatican.jpg"},
    {name: "ET", url: "../../../assets/Ethiopia.jpg"},
    {name: "ME", url: "../../../assets/Montenegro.jpg"},
    {name: "NA", url: "../../../assets/Namibia.jpg"},
    {name: "GH", url: "../../../assets/Ghana.jpg"}
   ]
  constructor(private http: HttpClient) { }
  getCountries(){
    const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/countries";
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-key": "90a13f9868msha1bc4edaad4f120p1aa1d7jsn65ca1f7e6168",
	      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      })
    };
     this.http.get(url, httpOptions).subscribe((res: any) =>{
       this.addImage(res["data"]);
    })
      return this.countries;
  }
 
  addImage(data: any){
    
    let child = {};
    let i = 1;
    data.forEach((element: any) => {
    let found = this.countryImage.find((el) => el.name == element.code);
    child = {
      name: element.name,
      url: found?.url,
      id: i++,
    } 
    this.countries.push(child); 
  }); 
  }
}
