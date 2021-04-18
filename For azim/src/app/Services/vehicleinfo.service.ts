
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer} from 'rxjs';
import {VehicleInfoModule} from '../Modules/vehicle-info/vehicle-info.module';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
import { PolicyinfoModule } from '../Modules/policyinfo/policyinfo.module';
@Injectable({
  providedIn: 'root'
})
export class VehicleinfoService {

  usr: VehicleInfoModule;
  http: HttpClient;
  url: string = 'http://localhost:49356/api/VehicleAPI';
  url1: string = 'http://localhost:49356/api/PolicyAPI';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http: HttpClient) { this.http=http; }

  GetAllVehicles(): Observable<VehicleInfoModule[]>
  {
    return this.http.get<VehicleInfoModule[]>(this.url+'/'+'GetAllVehicles');
  }
  GetAllPolicies(): Observable<PolicyinfoModule[]>
  {
    return this.http.get<PolicyinfoModule[]>(this.url1+'/'+'GetAllPolicies');
  }
  

  Register(usr: VehicleInfoModule):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+'/'+ 'RegisterVehicle',usr, this.httpOptions);
  }
  GetVehicleByID(phone:number):Observable<VehicleInfoModule[]>
  {
    return this.http.get<VehicleInfoModule[]>(this.url+'/'+'GetVehicleByID' +'/'+phone, this.httpOptions);
  }
  DeleteVehicle(id:number):Observable<Boolean>
  {
    return this.http.delete<boolean>(this.url+'/'+'DeleteVehicle'+'/'+id);
  }
  

  

}
