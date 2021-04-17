import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer} from 'rxjs';
import {ClaiminfoModule} from '../Modules/claiminfo/claiminfo.module';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
import { PolicyinfoModule } from '../Modules/policyinfo/policyinfo.module';
import { VehicleInfoModule } from '../Modules/vehicle-info/vehicle-info.module';
@Injectable({
  providedIn: 'root'
})
export class ClaiminfoService {

  usr: ClaiminfoModule;
  http: HttpClient;
  url: string = 'http://localhost:49356/api/ClaimAPI';
  url1: string = 'http://localhost:49356/api/PolicyAPI';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor() { }

  GetPolicies(): Observable<PolicyinfoModule[]>
  {
    return this.http.get<PolicyinfoModule[]>(this.url1+'/'+'GetAllPolicies');
  }
  RegisterClaim(usr: ClaiminfoModule):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+'/'+ 'RegisterClaim',usr, this.httpOptions);
  }
}
