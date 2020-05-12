import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TransferComponent } from './transfer/transfer.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateWalletUserComponent } from './update-wallet-user/update-wallet-user.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'add',component:AddComponent},
  {path:'withdraw',component:WithdrawComponent},
 // {path:'dashboard/:accountBalance',component:DashboardComponent},
 // {path:'dashboard',component:DashboardComponent},
  {path:'',component:LoginComponent},
  {path:'dashboard', canActivate:[AuthGuard],component:DashboardComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'login/:msg',component:LoginComponent},
  {path:'transfer',component:TransferComponent},
  {path:'update',canActivate:[AuthGuard],component:UpdateWalletUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
