import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {


  user  = new User();
  msg='';
    constructor(private _service : RegistrationService,private _router:Router) { }
  

  ngOnInit(): void {
  }
 
    
  }


