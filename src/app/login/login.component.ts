import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { WalletService } from '../wallet.service';
import { WalletUser } from '../wallet-user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  msg="";
  walletUser=new WalletUser();
  
  constructor(private _service : WalletService,private _router : Router,private _authservice : AuthenticationService) { }

  ngOnInit(): void {
  }





  loginWalletUser(){
    this._service.loginWalletUserFromRemote(this.walletUser);
   // .subscribe(
    //  data =>{
    //    this._authservice.Login("jwt token should be send here ");
    //    console.log("Response Received"),
    //    this._router.navigate(['/dashboard'])
    //    },
    //    error =>{
     //   console.log("Exception Occured"),
    //    this.msg="Bad Credentials ,please enter valid phone number/password"}
    //    )
  }

  gotoregistrationpage(){
     this._router.navigate(['/registration'])}

  }

