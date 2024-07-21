import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router,private httpService:HttpService){

  }

  public signupForm !: FormGroup 


  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.fb.group({
      name:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      email:['',[Validators.required]],
      date:['',[Validators.required]],
      adress:['',[Validators.required]],

    }
    )
  }

  // signup(){
  //  this.http.post<any>("http://localhost:8080/Customer",this.signupForm.value)
  //  .subscribe(res=>{
  //   alert("signup successfull"),
  //   this.signupForm.reset(),
  //   this.router.navigate(['login'])

  //  },err=>{alert('some thing went wrong')})
  // }
  
  sigup(){
    this.httpService.addCustomer(this.signupForm.value).subscribe(res=>{
      alert("signup successfull"),
      this.signupForm.reset(),
      this.router.navigate(['login'])
  
     },err=>{alert('some thing went wrong')})
  }

  // createForm() {
  //   this.signupForm = this.fb.group({
  //     name:['', Validators.required],
  //     username:['', Validators.required],
  //     password:['', Validators.required],
  //     email:['', Validators.required],
  //     date:['', Validators.required],
  //     adress:['', Validators.required],

  //   }
  //   )
  // }

  //  createAccount(){
  //   console.log(this.registerForm.value)
  //  }


}
