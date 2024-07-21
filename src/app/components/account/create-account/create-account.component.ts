<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
=======
import { Component } from '@angular/core';
>>>>>>> e47c297 (third commit)

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
<<<<<<< HEAD
export class CreateAccountComponent implements OnInit{

  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router,private httpService:HttpService){

  }

  public cAccountForm !: FormGroup 


  ngOnInit(): void {
    this.createAccountForm();
  }

  createAccountForm() {
    this.cAccountForm = this.fb.group({
      // accountName:['',[Validators.required]],
      // accountNumber:['',[Validators.required]],
      // balance:['',[Validators.required]],
      // creationDate:['',[Validators.required]],
      accountType:['',[Validators.required]],
      // isClosed:['',[Validators.required]],
      // raisonMssg:['',[Validators.required]],
      // customerID:['',[Validators.required]],
      
    }
    )
  }

  createAccount(){
    this.httpService.addAccount(this.cAccountForm.value,this.cAccountForm.value.customerID).subscribe(res=>{
      alert("account created successfull"),
      this.cAccountForm.reset(),
      this.router.navigate(['login'])
  
     },err=>{alert('some thing went wrong')})
  }
  }
=======
export class CreateAccountComponent {

}
>>>>>>> e47c297 (third commit)
