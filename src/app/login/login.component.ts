import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user  = new User();
msg='';

  constructor(private _service : RegistrationService,private _router:Router) { }

  
  ngOnInit() { 
  }
    
       loginUser(){
        this._service.loginUserFromRemote(this.user).subscribe(
        data => {
          console.log("response recieved");
          sessionStorage['username']=this.user.username;
         
         this._router.navigate(['/authentication'])
        },
        error =>{
           console.log("exception occured");
           this.msg="Bad Credentials please enter valid username and password";
        }
        )
      }
      gotoregister(){
        this._router.navigate(['/register'])
      }
    }
  