import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { AccountComponent } from './components/account/account.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { ShowInformationComponent } from './components/account/show-information/show-information.component';
<<<<<<< HEAD
import { UpdateAccountComponent } from './components/account/update-account/update-account.component';
import { BlockAccountComponent } from './components/account/block-account/block-account.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {path :'cards', component:CardComponent},
  {path :'updateaccount', component:UpdateAccountComponent},
  {path :'blockaccount', component:BlockAccountComponent},
  { path: 'account', component: AccountComponent },
  { path: 'createaccount', component: CreateAccountComponent },
=======

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'createAcocount', component: CreateAccountComponent },
>>>>>>> e47c297 (third commit)
  { path: 'showinformation', component: ShowInformationComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
