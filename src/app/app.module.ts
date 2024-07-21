import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AccountComponent } from './components/account/account.component';
import { HttpService } from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { ShowInformationComponent } from './components/account/show-information/show-information.component';
import { UpdateAccountComponent } from './components/account/update-account/update-account.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AccountComponent,
    LoginComponent,
    SignupComponent,
    NavComponent,
    DashboardComponent,
    FooterComponent,
    CreateAccountComponent,
    ShowInformationComponent,
    UpdateAccountComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
