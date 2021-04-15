import { Component, OnInit } from '@angular/core';
import { UserInfoModule } from '../../Modules/user-info/user-info.module';
import {UserInfoService} from '../../Services/user-info.service';
import {VehicleInfoModule} from '../../Modules/vehicle-info/vehicle-info.module';
import {VehicleinfoService} from '../../Services/vehicleinfo.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  svc: VehicleinfoService;
  svc1: UserInfoService;
  emplist: UserInfoModule[];
  vehlist: VehicleInfoModule[];
  buttonName1:string;
  GetAllUsers(){
    this.buttonName1="GetAllUsers";
  }
  GetAllVehicles(){
    this.buttonName1="GetAllVehicles";
  }
    constructor(svc: VehicleinfoService, svc1: UserInfoService) {this.svc=svc; this.svc1=svc1; }
  
    ngOnInit(): void {
  this.svc1.GetUsers().subscribe((data:UserInfoModule[])=>{
    this.emplist=data;
    console.log(this.emplist);
  });

  this.svc.GetAllVehicles().subscribe((data:VehicleInfoModule[])=>{
    this.vehlist=data;
    console.log(this.vehlist);
  });
    }
 
}
