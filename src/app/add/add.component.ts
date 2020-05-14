import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { WalletService } from '../wallet.service';
import {ActivatedRoute,Router} from '@angular/router';
import { WalletTransaction } from '../wallet-transaction';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  submitted = false;
   accountBalance:any;
  amount:any;
  phoneNumber:any;
   userName:any;
  constructor(private _walletService: WalletService,private _router:Router) {
    
   }
   
  ngOnInit() {
   
    this.phoneNumber=this._walletService.phoneNumber;
   //  this.userName=this._walletService.userModel.firstName+" "+this._walletService.userModel.lastName;
   this.userName=this._walletService.userName; 
   this.accountBalance=this._walletService.accountBalance;
    }
  
  onSubmit() { 
    this.submitted = true;
    //console.log(this.addWithdrawForm.value);
    // this.amount=this.addWithdrawForm.value.amount;

    this._walletService.addMoney(this.phoneNumber,this.amount);

    
  }
  onCancelClick(){
    this._router.navigate(['/dashboard'])
  }
  

}
