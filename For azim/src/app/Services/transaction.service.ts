import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{TransactionModule} from '../Modules/transaction/transaction.module';
import { Observable } from 'rxjs/internal/observable';
import {  HttpHeaders} from '@angular/common/http';
import {Observer} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  usr:TransactionModule;
  http:HttpClient;
  url:string='http://localhost:49356/api/PaymentAPI';
  httpOptions={headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };

  constructor(http:HttpClient) {this.http=http; }
  PaymentTravel(usr: TransactionModule):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+'/'+ 'PaymentTravel',usr, this.httpOptions);
  }
 
}