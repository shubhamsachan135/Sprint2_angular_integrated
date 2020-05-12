import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  get isLoggedIn(){
    return window.localStorage.getItem("isLoggedIn")==="true";
  }
  get token(){
    return window.localStorage.getItem("token");
  }

  
  Login(jwt : string){
    window.localStorage.setItem("token",jwt);
    window.localStorage.setItem("isLoggedIn","true");
  }

  Logout(){
    window.localStorage.setItem("token",null);
    window.localStorage.setItem("isLoggedIn","false");
  }

}
