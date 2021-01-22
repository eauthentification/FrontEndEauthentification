import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http : HttpClient) { }
 
 
  public fetchMobileNoAndOtpFromRemote(user:string):Observable<any>{
    return this._http.get<any>("http://localhost:9090/user/mobileno/" +user);

  }
  

  handleError(error: Response){

  }
  

}