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
  userName:any;
  phoneNumber:any;
  accountBalance:any;
  userModel:any;
  walletUser:any;
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
   this.accountBalance=this.walletTransaction.accountBalance;
    this._router.navigate(['/dashboard']);
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
   this.accountBalance=this.walletTransaction.accountBalance;
    this._router.navigate(['/dashboard']);
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
    this.userName=this.userModel.firstName+" "+this.userModel.lastName;
    this._authservice.Login("jwt token should be send here ");
    this._router.navigate(['/dashboard']);
   },
     error=>{console.log(error);
      let msg="Bad Credentials";
     this._router.navigate(['/login',msg]);}
   );   


  }


  public registerWalletUserFromRemote(walletUser : WalletUser ):Observable<any>{
    return this._http.post("http://localhost:8888/login-register-micro-service/register",walletUser);
  }


  public fetchWalletUserFromRemote(phonenumber:number):Observable<any>{
    console.log({phonenumber})
    return this._http.get("http://localhost:8888/login-register-micro-service/walletUser/"+phonenumber);

  }


  public deleteWalletUserFromRemote(phonenumber :number):Observable<any>{
    return this._http.delete("http://localhost:8888/login-register-micro-service/deleteWalletUser/"+phonenumber);

  }

  public updateWalletUserFromRemote(phonenumber:number,value:any){
    console.log({phonenumber})
    return this._http.put("http://localhost:8888/login-register-micro-service/updateWalletUser/"+phonenumber,value)
    .subscribe(
      data=>{console.log(data)
        this.walletUser=data;
       this.userName=this.walletUser.firstName+" "+this.walletUser.lastName;
        this._router.navigate(['/dashboard']);
       // alert("Money Withdrawn Successfully");
        },
        error=>console.log(error)
       );   
       }
  }

 

  

