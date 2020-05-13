import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  get isLoggedIn(){
    return sessionStorage.getItem("isLoggedIn")==="true";
  }
  get token(){
    return sessionStorage.getItem("token");
  }

  
  Login(jwt : string){
    sessionStorage.setItem("token",jwt);
    sessionStorage.setItem("isLoggedIn","true");
  }

  Logout(){
    window.localStorage.setItem("token",null);
    window.localStorage.setItem("isLoggedIn","false");
  }

}
