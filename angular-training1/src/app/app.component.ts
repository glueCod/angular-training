import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = "Vishwas"
  title = 'angular-training1';
  userName = ""; 
  password= "";
  ChangeTitle(){
    this.title= this.userName;
    console.log(this.userName," ",  this.password)
  }
  
}
