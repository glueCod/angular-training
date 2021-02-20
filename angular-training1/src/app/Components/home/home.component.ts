import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ActivatedRoute, Router,} from '@angular/router';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries = [
    {id: 1, name: "Vatican", url: "../../../assets/Vatican.jpg"},
    {id: 2, name: "Ghana", url: "../../../assets/Ghana.jpg"},
    {id: 3, name: "Montenegro", url: "../../../assets/Montenegro.jpg"},
    {id: 4, name: "Nimibia", url: "../../../assets/Namibia.jpg"},
    {id: 5, name: "Ethiopia", url: "../../../assets/Ethiopia.jpg"}
  ]

constructor(private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
  }

  // showOverview(id:number){
  //   this.router.navigate([], {relativeTo: this.route})
    
  // }
}
