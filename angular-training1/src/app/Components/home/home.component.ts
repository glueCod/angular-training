import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,} from '@angular/router';
import {AppService} from "../../services/app.service";
import { map } from 'rxjs/operators'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 countryImage = [
   {name: "VA", url: "../../../assets/Vatican.jpg"},
   {name: "ET", url: "../../../assets/Ethiopia.jpg"},
   {name: "ME", url: "../../../assets/Montenegro.jpg"},
   {name: "NA", url: "../../../assets/Namibia.jpg"},
   {name: "GH", url: "../../../assets/Ghana.jpg"}
  ]
 countries: any = [];
constructor(
   private router: Router,
   private route: ActivatedRoute,
   private service: AppService
   
   ) {
    
  }
  ngOnInit(): void {
  this.countries = this.service.getCountries();
  console.log(this.countries); 
  }
  
}
