import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { WalletService } from '../wallet.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accountBalance:any;
  message=" ";
  userName:any;
  constructor(private route:ActivatedRoute,private _router: Router,private _walletService: WalletService,private _authservice : AuthenticationService) {
    
  }

  ngOnInit() {
   // this.accountBalance=this.route.snapshot.params['accountBalance'];
   this.accountBalance= this._walletService.accountBalance;
  this.userName=this._walletService.userModel.firstName+" "+this._walletService.userModel.lastName;
    console.log(this.userName);
  if( this._walletService.walletTransaction!=null){
     this.accountBalance= this._walletService.walletTransaction.accountBalance;
     console.log(this.userName);
     console.log(this.accountBalance);
     this.message=this._walletService.walletTransaction.amount+" "+this._walletService.walletTransaction.description;
     setTimeout(()=>this.message="  ",3000);
    }
  }

 onAddClick() :void {
    this._router.navigate(['/add']);
}
onWithdrawClick() :void {
  this._router.navigate(['/withdraw']);

}
onTransferClick() :void {
  this._router.navigate(['/transfer']);

}
updateWalletUser(){
  this._router.navigate(['/update']);
}
deleteWalletUser(){

}

onLogout(){
  sessionStorage.setItem('logout','loggedout'),
  this._router.navigate(['/login'])
}

}



