import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observer} from 'rxjs';
import{TravelInsuranceModule} from '../Modules/travel-insurance/travel-insurance.module'
import { Observable } from 'rxjs/internal/observable';
import {  HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TravelInsuranceService {
  usr:TravelInsuranceModule;
  http:HttpClient;
  url:string='http://localhost:54887/api/TravelAPI';
  httpOptions={headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http:HttpClient) {this.http=http; }

 RegisterTravelDetails(usr: TravelInsuranceModule):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+'/'+ 'RegisterTravelDetails',usr, this.httpOptions);
  }
  GetAllTravels(): Observable<TravelInsuranceModule[]>
  {
    return this.http.get<TravelInsuranceModule[]>(this.url+'/'+'GetAllTravels');
  }

  GetTravelByID(phone:number):Observable<TravelInsuranceModule[]>
  {
    return this.http.get<TravelInsuranceModule[]>(this.url+'/'+'GetTravelByID' +'/'+phone, this.httpOptions);
  }
 
}