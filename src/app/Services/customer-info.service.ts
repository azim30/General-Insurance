import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observer} from 'rxjs';
import{CustInfoModule} from '../modules/cust-info/cust-info.module';
import{Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerInfoService {
  cust: CustInfoModule;
  http: HttpClient;
  url: string='http://localhost:57452/api/CustomerAPI';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http:HttpClient) {this.http=http; }
  InsetNewEmployee(cust: CustInfoModule): Observable<boolean>{
    return this.http.post<boolean>(this.url + '/' + 'InsertCustomer', cust,this.httpOptions);
  }
}
