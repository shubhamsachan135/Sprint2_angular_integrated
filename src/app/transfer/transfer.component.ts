import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { WalletService } from '../wallet.service';
import {ActivatedRoute,Router} from '@angular/router';
import { WalletTransaction } from '../wallet-transaction';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  submitted = false;
  accountBalance:any;
  amount:any;
  accountId:any;
  phoneNumber:any;
  userName:any;
  constructor(private _walletService: WalletService,private _router:Router) {
    
   }
   
  ngOnInit() {
   
    this.phoneNumber=this._walletService.phoneNumber;
    // this.userName=this._walletService.userModel.firstName+" "+this._walletService.userModel.lastName;
    this.userName=this._walletService.userName;
    this.accountBalance=this._walletService.accountBalance;
    }

transferMoney(){
  console.log(this.phoneNumber);
  console.log(this.accountId);
  console.log(this.amount);
    this._walletService.transferMoney(this.phoneNumber,this.amount,this.accountId);
}

onCancelClick(){
  this._router.navigate(['/dashboard'])

}
}
