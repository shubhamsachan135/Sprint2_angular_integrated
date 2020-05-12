import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { WalletUser } from '../wallet-user';
import { Router } from '@angular/router';
import { WalletService } from '../wallet.service';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  walletUser=new WalletUser();
  msg="";

  constructor(private _service : WalletService ,private _router : Router) { }

  ngOnInit(): void {
  }


  registerUser(){
  this._service.registerWalletUserFromRemote(this.walletUser).subscribe(
    data=>{
      console.log("response received");
      this.msg="registration successful";
      this._router.navigate(['/login'])
    },
    error=>{
      console.log("exception occured");
      this.msg=error.error.message;
    }
  )
  }

  gotologinpage(){
    this._router.navigate(['/login']);
  }


}
