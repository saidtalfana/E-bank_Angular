import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

url: string = 'http://localhost:8080/'

constructor(private http:HttpClient) {}

 fetchCustomer(){
  return this.http.get<Customer[]>(this.url + 'show_all_customer')
}
// getEmployeeList(): Observable<any> {
//   return this.httpClient.get(this.baseUrl + 'employees');
// }
 addCustomer(customer : Customer){
  return this.http.post<Customer>(this.url + 'customer',customer)
}
// addEmployee(data: any): Observable<any> {
//   return this.httpClient.post(this.baseUrl + 'employees', data);
// }
 fetchCustomerById(id : number){
  return this.http.get<Customer>(this.url + 'show_customer/' + id)
}

 updateCustomer(id : number,customer : Customer){
  return this.http.put<Customer>(this.url + 'update_customer' + id,customer)
}
// updateEmployee(id: number, data: any): Observable<any> {
//   return this.httpClient.put(this.baseUrl + employees / ${ id }, data);
// }

 deleteCustomer(id: number){
  return this.http.delete<Customer>(this.url + 'delete_customer'+ id)
}
// delete user
deleteUser(id: number){
  return this.http.delete<Customer>(`${this.url+"delete_customer"}/${id}`)
}
// deleteEmployee(id: number): Observable<any> {
//   return this.httpClient.delete(this.baseUrl + employees / ${ id });
// }




// :::::::::::::::::::::::::::ACCOUNT::::::::::::::::::::::::::::::::::::::::::::::::

addAccount(account : Account,id:number){
  return this.http.post<Account>(`${this.url + 'save_account'}/${id}`+ account,id)
}
// :::::::::::::::::::::::::::Card::::::::::::::::::::::::::::::::::::::::::::::::

fetchCard(){
  return this.http.get<Card>(this.url + 'show_all_customer')
}

}
