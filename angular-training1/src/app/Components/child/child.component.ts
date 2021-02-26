import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  countries: any;
  country:any; 
 name= "vatican";
  constructor(private route: ActivatedRoute, private service: AppService) { }

  getCountry(){
    this.countries = this.service.getCountries();
    const id: number = this.route.snapshot.params.id ;
    this.country = this.countries.find((country:any)=>{
      return country.id == id;  
    });  
    console.log(this.country.name);
  }

  ngOnInit(): void {
    this.getCountry();
  } 
}
