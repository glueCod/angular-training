import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user:any ={
    userName: "",
    password: ""
  }
  data: any={
    userName: "",
    password: ""
  };
  
  formSubmit(){
    this.data.userName = this.user.userName 
    this.data.password = this.user.password
    
    
   this.user= {};

  }

}
