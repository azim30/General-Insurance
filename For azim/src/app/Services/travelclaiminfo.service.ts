import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer} from 'rxjs';
import {ClaiminfoModule} from '../Modules/claiminfo/claiminfo.module';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
import { PolicyinfoModule } from '../Modules/policyinfo/policyinfo.module';
import { VehicleInfoModule } from '../Modules/vehicle-info/vehicle-info.module';
import { TravelclaiminfoModule } from '../Modules/travelclaiminfo/travelclaiminfo.module';
@Injectable({
  providedIn: 'root'
})
export class TravelclaiminfoService {

  usr: TravelclaiminfoModule;
  http: HttpClient;
  url: string = 'http://localhost:49356/api/TravelClaimAPI';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http: HttpClient) { this.http=http; }

  RegisterTravelClaim(usr:TravelclaiminfoModule):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+'/'+ 'TravelClaimDetails',usr, this.httpOptions);
  }
}
