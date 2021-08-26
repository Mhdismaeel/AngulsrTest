import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import {  Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Register } from '../interfaces/register';
import { Login } from '../interfaces/login';
import { Customer } from '../interfaces/customer';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Product } from '../interfaces/product';
import { Order } from '../interfaces/order';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private api='http://angular-course.baservices.net/api/';
  constructor(private httpClient:HttpClient) { }

  register(user:Register):Observable<any>
  {
    return this.httpClient.post<any>(this.api+'user/register',user);
  }

login(log:Login):Observable<any>
{
  return this.httpClient.post<any>(this.api+'user/token',log);
}


refreshToken(RefreshToken:string):Observable<Token>
{
  return this.httpClient.post<Token>(this.api+'user/refresh-token',RefreshToken);
}


getCustomer():Observable<Customer[]>
{
  return this.httpClient.get<Customer[]>(this.api+'customers');
}


postCustomer(customer:Customer):Observable<Customer>
{
  return this.httpClient.post<Customer>(this.api+'customers',customer);
}


getToken()
{
return localStorage.getItem('Token');
}


getRefreshToken()
{
return localStorage.getItem('RefreshToken');
}

getCusomers():Observable<Customer[]>
  {
    return this.httpClient.get<Customer[]>(this.api+'customers');
  }


  getProducts():Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(this.api+'products');
  }

  postOrder(order:Order):Observable<Order>
  {
     return this.httpClient.post<Order>(this.api+'orders',order);
  }



}
