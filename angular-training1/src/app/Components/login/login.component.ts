import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   user = {
    userName: "",
    password: ""
  }

  constructor(private _router: Router){}

  formSubmit(){
    let un = this.user.userName;
    let pw = this.user.password;
    if(un ==  "Ahmad" &&  pw == "hello"){
      this._router.navigate(["/home"])
    }
  }
}
