import { Observable } from 'rxjs';
import { Customer } from './../models/customer';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44371/api/';

  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    return this.httpClient.get<ListResponseModel<Customer>>(
      this.apiUrl + 'customers/getall'
    );
  }

  getCustomerByEmail(email: string): Observable<SingleResponseModel<Customer>> {
    let newPath = 'getcustomerbyemail?email=' + email;
    return this.httpClient.get<SingleResponseModel<Customer>>(
      this.apiUrl + newPath
    );
  }
  GetCustomerDetails(): Observable<ListResponseModel<Customer>> {
    let newPath = 'getcustomerdetails' ;
    return this.httpClient.get<ListResponseModel<Customer>>(
      this.apiUrl + newPath
    );
  }
  update(customer: Customer){
    return this.httpClient.put<Customer>(this.apiUrl, customer);
 }
}