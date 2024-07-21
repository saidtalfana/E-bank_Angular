import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm !:FormGroup;

constructor(private fb:FormBuilder,private httpService:HttpService,private httpClient:HttpClient, private router:Router){
}

  ngOnInit(): void {
   this.loginIn();
  }

  loginIn(){
    this.loginForm=this.fb.group({
      username:[''],
      password:['']
   } )
  }






  login(){
   
    this.httpService.fetchCustomer().subscribe((res:any)=>{
      localStorage.setItem('token',res)
      console.log(res.token);
      if(res.token===undefined){
        alert('jwt is null')
      }
      const user = res.find((a:any)=>{
        return a.username===this.loginForm.value.username && a.password===this.loginForm.value.password
      });
      if(user){
        alert('you are logged successfully');
        this.loginForm.reset();
        this.router.navigate(['account'])
      }else{
        alert('user not found')
      }
    }
  
  ,err=>{

    alert('something went wrong')
  })
  }
 
  // login(){
  //   this.httpClient.get<any>('http://localhost:8080/show_all_customer').subscribe(res=>{
  //     const customer = res.find((a:any)=>{
  //       return a.username===this.loginForm.value.username && a.password===this.loginForm.value.password
  //     });
  //     if(customer){
  //       alert('you are logged successfully');
  //       this.loginForm.reset();
  //       this.router.navigate(['dashboard'])
  //     }else{
  //       alert('user not found')
  //     }
  //   }
  
  // ,err=>{
  //   alert('something went wrong')
  // })
  // }
}
