import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
    
  listUser : any = [];

constructor(private httpService:HttpService){}


  ngOnInit(){
    this.getCustomer();
  }
  getCustomer(){
    this.httpService.fetchCustomer().subscribe(res =>{
      this.listUser=res
    } );
  }


  deleteCustomer(customerID: number){
    this.httpService.deleteUser(customerID).subscribe(
      ()=>{this.listUser=this.listUser.filter(
        ((customer:Customer) => customer.customerID != customerID)
      )}
    )
  }




  // deleteEmployee(id: number) {
  //   let confirm = window.confirm("Are you sure you want to delete this employee?");
  //   if(confirm) {
  //     this.empService.deleteEmployee(id).subscribe({
  //       next: (res) => {
  //         alert('Employee deleted!');
  //         this.getEmployeeList();
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //     });
  //   }

}
