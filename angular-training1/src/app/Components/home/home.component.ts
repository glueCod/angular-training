import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,} from '@angular/router';
import {AppService} from "../../services/app.service";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 countries: any;
constructor(
   private router: Router,
   private route: ActivatedRoute,
   private service: AppService
   
   ) {
    
  }
  ngOnInit(): void {
     this.countries = this.service.getCountries();    
  }
  
}
