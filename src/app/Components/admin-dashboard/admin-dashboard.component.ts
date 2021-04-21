import { Component, OnInit } from '@angular/core';
import { UserInfoModule } from '../../Modules/user-info/user-info.module';
import {UserInfoService} from '../../Services/user-info.service';
import {VehicleInfoModule} from '../../Modules/vehicle-info/vehicle-info.module';
import {VehicleinfoService} from '../../Services/vehicleinfo.service';
import {ClaiminfoModule} from '../../Modules/claiminfo/claiminfo.module';
import{ClaiminfoService} from '../../Services/claiminfo.service';
import {TravelclaiminfoModule} from '../../Modules/travelclaiminfo/travelclaiminfo.module';
import{TravelclaiminfoService} from '../../Services/travelclaiminfo.service';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  term: string;
  model: any = [];
  svc: VehicleinfoService;
  svc1: UserInfoService;
  svc2: ClaiminfoService;
  svc3: TravelclaiminfoService;
  emplist: UserInfoModule[];
  vehlist: VehicleInfoModule[];
  claimlist: ClaiminfoModule[];
  tralist: TravelclaiminfoModule[];
  buttonName1:string;
  GetAllUsers(){
    this.buttonName1="GetAllUsers";
  }
  GetAllVehicles(){
    this.buttonName1="GetAllVehicles";
  }
  GetAllClaims(){
    this.buttonName1="GetAllClaims";
  }
  GetAllTravelClaims(){
    this.buttonName1="GetAllTravelClaims";
  }

    constructor(svc: VehicleinfoService, svc1: UserInfoService, svc2: ClaiminfoService, svc3: TravelclaiminfoService) {this.svc=svc; this.svc1=svc1; this.svc2=svc2; this.svc3=svc3;}
  
    ngOnInit(): void {   
  this.svc1.GetUsers().subscribe((data:UserInfoModule[])=>{
    this.emplist=data;
    console.log(this.emplist);
  });

  this.svc.GetAllVehicles().subscribe((data:VehicleInfoModule[])=>{
    this.vehlist=data;
    console.log(this.vehlist);
  });

  this.svc2.GetAllClaims().subscribe((data:ClaiminfoModule[])=>{
    this.claimlist=data;
    console.log(this.claimlist);
  });

  this.svc3.GetAllTravelClaims().subscribe((data:TravelclaiminfoModule[])=>{
    this.tralist=data;
    console.log(this.tralist);
  });

    }

    Approve(id:number){
      this.svc2.ApproveClaim(id).subscribe((data:boolean)=>
      {
        if(data)
        {
          alert("Status Updated");
          location.reload();
        }
        else{
          alert("Status Not Updated");
        }
      });
    }

    ApproveTravel(id:number){
      this.svc3.ApproveTravelClaim(id).subscribe((data:boolean)=>
      {
        if(data)
        {
          alert("Status Updated");
          location.reload();
        }
        else{
          alert("Status Not Updated");
        }
      });
    }



    Decline(id:number){
      this.svc2.DeclineClaim(id).subscribe((data:boolean)=>
      {
        if(data)
        {
          alert("Status Updated");
          location.reload();
        }
        else{
          alert("Status Not Updated");
        }
      });
    }

    DeclineTravel(id:number){
      this.svc3.DeclineTravelClaim(id).subscribe((data:boolean)=>
      {
        if(data)
        {
          alert("Status Updated");
          location.reload();
        }
        else{
          alert("Status Not Updated");
        }
      });
    }
 
}
