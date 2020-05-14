import { Component, OnInit } from '@angular/core';
import { WalletUser } from '../wallet-user';
import { ActivatedRoute, Router } from '@angular/router';
import { WalletService } from '../wallet.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-update-wallet-user',
  templateUrl: './update-wallet-user.component.html',
  styleUrls: ['./update-wallet-user.component.css']
})
export class UpdateWalletUserComponent implements OnInit {

  phonenumber:number;
  walletUser:WalletUser;
  
  constructor(private route:ActivatedRoute,private _router:Router,private _service:WalletService ,private _authservice : AuthenticationService) { }

  ngOnInit(): void {
    this.walletUser=new WalletUser();

    this.phonenumber=this.route.snapshot.params['phonenumber'];
    this._service.fetchWalletUserFromRemote(this.phonenumber).subscribe(
    data=>{
      console.log(data);
      this.walletUser=data;},
     error=>{console.log(error)})
    
    } 

    updateWalletUser(){
      this._service.updateWalletUserFromRemote(this.phonenumber,this.walletUser)
    }
    

    onSubmit(){
      this.updateWalletUser();
    }


    onLogout(){

      this._authservice.Logout();
      this._router.navigate(['/login'])
    }





    }


