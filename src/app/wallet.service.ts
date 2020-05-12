import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient}   from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import {ActivatedRoute,Router} from '@angular/router';
import { WalletTransaction } from './wallet-transaction';
import{WalletUser} from './wallet-user'
@Injectable({
  providedIn: 'root'
})
export class WalletService {
  phoneNumber:any;
  accountBalance:any;
  userModel:any;
  walletTransaction:any;
  constructor(private _http:HttpClient,private _router:Router,private _authservice : AuthenticationService) { }

  addMoney(userId:String,amount:number){
    console.log({userId});
    console.log({amount});

    this._http.get(`http://localhost:8888/add-withdraw-micro-service/wallet/add/${userId}/${amount}`)
    .subscribe(data=>{console.log(data)
           this.walletTransaction=data;
     console.log(this.walletTransaction.accountBalance);
     this.accountBalance=this.walletTransaction.accountBalance;
     this._router.navigate(['/dashboard']);
    // alert("Money Added Successfully");
},
error=>console.log(error)
 );   
  }

  withdrawMoney(userId:String,amount:any){
    console.log({userId});
    console.log({amount});
   this._http.get(`http://localhost:8888/add-withdraw-micro-service/wallet/withdraw/${userId}/${amount}`)
   .subscribe(data=>{console.log(data)
    this.walletTransaction=data;
   //console.log(this.walletTransaction.accountBalance);
   this.accountBalance=this.walletTransaction.accountBalance;
    this._router.navigate(['/dashboard']);
   // alert("Money Withdrawn Successfully");
    },
    error=>console.log(error)
   );   
   }



   transferMoney(phoneNumber:any,amount:any,accountId:any){
    console.log({phoneNumber});
    console.log({amount});
   this._http.get(`http://localhost:8888/add-withdraw-micro-service/wallet/transfer/${phoneNumber}/${amount}/${accountId}`)
   .subscribe(data=>{console.log(data)
    this.walletTransaction=data;
   //console.log(this.walletTransaction.accountBalance);
   this.accountBalance=this.walletTransaction.accountBalance;
    this._router.navigate(['/dashboard']);
   // alert("Money Withdrawn Successfully");
    },
    error=>console.log(error)
   );   
   }


   public loginWalletUserFromRemote(walletUser : WalletUser ){
    return this._http.post("http://localhost:8888/login-register-micro-service/login",walletUser)
    .subscribe(data=>{console.log(data)
      this.userModel=data;
    this.accountBalance=this.userModel.accountBalance;
    this.phoneNumber=this.userModel.phoneNumber;
    this._authservice.Login("jwt token should be send here ");
    this._router.navigate(['/dashboard']);
// alert("Money Added Successfully");
   },
     error=>{console.log(error);
      let msg="Bad Credentials";
     this._router.navigate(['/login',msg]);}
   );   


  }





  public registerWalletUserFromRemote(walletUser : WalletUser ):Observable<any>{
    return this._http.post("http://localhost:8888/login-register-micro-service/register",walletUser);
  }

  public updateWalletUserFromRemote(phonenumber:number,value:any):Observable<any>{
    return this._http.put("http://localhost:9999/updateWalletUser/"+phonenumber,value);

  }
  


  public fetchWalletUserFromRemote(phonenumber:any):Observable<any>{
    console.log()
    return this._http.get("http://localhost:9999/walletUser/"+phonenumber);

  }
}
  

