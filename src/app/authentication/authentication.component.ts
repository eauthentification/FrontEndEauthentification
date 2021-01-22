import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
user  = new User;
msg='';
 
  constructor(private _service : AuthenticationService,private _router:Router) { }

  ngOnInit(){
    
  }
  fetchMobileNoAndOtp(){
    this.user.username=sessionStorage.getItem('username');
    console.log(this.user);
    this._service.fetchMobileNoAndOtpFromRemote(this.user.username).subscribe(
      data => {
        console.log("response recieved");  
        
       this._router.navigate(['/otpverification'])
      },
      error =>{
         console.log("exception occured");
         this.msg="Bad Credentials please enter valid username and password";
      }
    
     /* this._service.fetchMobileNoAndOtpFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");  
        
       this._router.navigate(['/otpverification'])
      },
      error =>{
         console.log("exception occured");
         this.msg="Bad Credentials please enter valid username and password";
      }*/      
    
    )
   }
 }