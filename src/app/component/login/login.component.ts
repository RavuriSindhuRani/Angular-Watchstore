import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private bs:Router){}
  username:any;
  password:any;
  reqpwd:any;
  checkLogin(){
    this.reqpwd = this.username.slice(0,3)+"123"
    if(this.password == this.reqpwd){
      alert("login success")
      localStorage.setItem("userloggedin",this.username)
      this.bs.navigateByUrl('/admin')
    }
    else{
      alert("login failed")
    }
  }

}
