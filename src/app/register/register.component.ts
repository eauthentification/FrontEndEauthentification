
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from './../registration.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 

  user = new User();
  msg='';
 
  constructor(private _service : RegistrationService,private _router:Router) { }

  ngOnInit() {

  }
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response recieved");
        this._router.navigate(['/login'])
      },
      error =>{
      console.log("exception occurred");
      this.msg=error.error;
      
    }
   )
  }
}