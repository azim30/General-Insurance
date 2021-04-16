
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer} from 'rxjs';
import {VehicleInfoModule} from '../Modules/vehicle-info/vehicle-info.module';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VehicleinfoService {

  usr: VehicleInfoModule;
  http: HttpClient;
  url: string = 'http://localhost:54887/api/VehicleAPI';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http: HttpClient) { this.http=http; }

  GetAllVehicles(): Observable<VehicleInfoModule[]>
  {
    return this.http.get<VehicleInfoModule[]>(this.url+'/'+'GetAllVehicles');
  }
  GetVehicleByID(phone:number):Observable<VehicleInfoModule[]>
  {
    return this.http.get<VehicleInfoModule[]>(this.url+'/'+'GetVehicleByID' +'/'+phone, this.httpOptions);
  }

  Register(usr: VehicleInfoModule):Observable<boolean>
  {
    return this.http.post<boolean>(this.url+'/'+ 'RegisterVehicle',usr, this.httpOptions);
  }
  DeleteVehicle(id:number):Observable<boolean>
  {
    return this.http.delete<boolean>(this.url + '/' + 'DeleteVehicle' + '/' +id);
  }
}
