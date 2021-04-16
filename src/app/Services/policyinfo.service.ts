import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {from, Observer} from 'rxjs';
import { PolicyinfoModule } from '../Modules/policyinfo/policyinfo.module';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolicyinfoService {

  pol: PolicyinfoModule;
  http: HttpClient;
  url: string = 'http://localhost:54887/api/PolicyAPI';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http: HttpClient) { this.http=http; }

  GetPolicies(): Observable<PolicyinfoModule[]>
  {
    return this.http.get<PolicyinfoModule[]>(this.url+'/'+'GetAllPolicies');
  }
  GetPolicyByID(phone:number):Observable<PolicyinfoModule[]>
  {
    return this.http.get<PolicyinfoModule[]>(this.url+'/'+'GetPolicyByID' +'/'+phone, this.httpOptions);
  }
  PolicyDetails(pol: PolicyinfoModule):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+'/'+ 'PolicyDetails',pol, this.httpOptions);
  }
 

}