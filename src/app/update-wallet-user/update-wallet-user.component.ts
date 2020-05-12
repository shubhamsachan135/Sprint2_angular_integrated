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

  phonenumber:any;
  walletUser:WalletUser;

  constructor(private route:ActivatedRoute,private _router:Router,private _service:WalletService,private _authservice : AuthenticationService) { }

  ngOnInit(): void {
    this.walletUser=new WalletUser();
  //  this.phonenumber=this.route.snapshot.params['phonenumber'];
   this.phonenumber=this._service.phoneNumber;
    this._service.fetchWalletUserFromRemote(this.phonenumber).subscribe(
    data=>{
      // console.log(data);
      this.walletUser=data;},
      error=>{console.log(error)})
    
    } 

    updateWalletUser(){
      this._service.updateWalletUserFromRemote(this.phonenumber,this.walletUser).subscribe(
        data=>[
          // console.log(data),
          // console.log(this.phonenumber),
          console.log("Data Updated")
        ],
        error=>console.log(error)); 
        // this.walletUser=new WalletUser();
        this._router.navigate(['dashboard/'+this.phonenumber]);
    }

    onSubmit(){
      this.updateWalletUser();
    }


    onLogout(){

      this._authservice.Logout();
      this._router.navigate(['/login'])
    }





    }





