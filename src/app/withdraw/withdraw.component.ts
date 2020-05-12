import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { WalletService } from '../wallet.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  submitted = false;
   accountBalance:any;
  amount:any;
  phoneNumber:any;
   userName:any;
  constructor(private _walletService: WalletService,private _router:Router) {
    
   }
   
  ngOnInit() {
   
    this.phoneNumber=this._walletService.phoneNumber;
     this.userName=this._walletService.userModel.firstName+" "+this._walletService.userModel.lastName;
     this.accountBalance=this._walletService.accountBalance;
    }
  
  onSubmit() { 
    this.submitted = true;
    //console.log(this.addWithdrawForm.value);
    // this.amount=this.addWithdrawForm.value.amount;

    this._walletService.withdrawMoney(this.phoneNumber,this.amount);

    
  }

  
}
