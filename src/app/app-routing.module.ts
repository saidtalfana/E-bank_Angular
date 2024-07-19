import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/glycemie', pathMatch: 'full' },
  { path: '**', redirectTo: '/glycemie', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
