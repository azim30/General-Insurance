import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {UserInfoModule} from '../../Modules/user-info/user-info.module';
import {UserInfoService} from '../../Services/user-info.service';
import { VehicleInfoModule } from '../../Modules/vehicle-info/vehicle-info.module';
import { VehicleinfoService } from '../../Services/vehicleinfo.service';
import { PolicyinfoModule } from '../../Modules/policyinfo/policyinfo.module';
import { PolicyinfoService } from '../../Services/policyinfo.service';
import { ClaiminfoModule } from '../../Modules/claiminfo/claiminfo.module';
import { ClaiminfoService } from '../../Services/claiminfo.service';
import {TravelInsuranceService} from '../../Services/travel-insurance.service';
import{TravelInsuranceModule} from '../../Modules/travel-insurance/travel-insurance.module';
import {TravelclaiminfoModule} from '../../Modules/travelclaiminfo/travelclaiminfo.module';
import {TravelclaiminfoService} from '../../Services/travelclaiminfo.service';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
term: string;
  model: any = [];
  svc: VehicleinfoService;
  psvc: PolicyinfoService;
  csvc: ClaiminfoService;
  tsvc: TravelInsuranceService
  tcsvc: TravelclaiminfoService;
  usr: VehicleInfoModule[];
  usrinfo =new UserInfoModule();
  vehinfo = new VehicleInfoModule();
  trvinfo = new TravelInsuranceModule();
  vehlist: VehicleInfoModule[];
  pollist: PolicyinfoModule[];
  clist: ClaiminfoModule[];
  tlist: TravelInsuranceModule[];
  tclist: TravelclaiminfoModule[];
  buttonName1:string;
  buttonName2: string;
  buttonName3: string;
  buttonName4: string;
  buttonName5: string;
  ngzone: NgZone;
  router: Router;
  phone: number;
  GetAllVehicles(){
    this.buttonName1="GetAllVehicles";
  }
  GetPolicies(){
    this.buttonName2="GetPolicies";
  }
  GetAllClaims(){
    this.buttonName3="GetAllClaims";
  }
  GetAllTravels(){
    this.buttonName4="GetAllTravels";
  }
  GetAllTravelClaims(){
    this.buttonName5="GetAllTravelClaims";
  }
  
  constructor(svc: VehicleinfoService,psvc: PolicyinfoService, csvc: ClaiminfoService, tscv: TravelInsuranceService, tcsvc: TravelclaiminfoService,ngzone: NgZone,
    router: Router) 
    {
      this.svc = svc;
      this.psvc = psvc;
      this.csvc = csvc;
      this.tsvc= tscv;
      this.tcsvc= tcsvc;

      this.ngzone = ngzone;
      this.router = router;

    }

    ngOnInit(): void {
      this.phone = parseInt(localStorage.getItem('PID'));
      this.svc.GetVehicleByID(this.phone).subscribe((data:VehicleInfoModule[])=>{
        this.vehlist=data;
        console.log(this.vehlist);
      });

      this.psvc.GetPolicyByID(this.phone).subscribe((data1:PolicyinfoModule[])=>{
        this.pollist=data1;
        console.log(this.pollist);
      });

      this.csvc.GetClaimByID(this.phone).subscribe((data2:ClaiminfoModule[])=>{
        this.clist=data2;
        console.log(this.clist);
      });

      this.tsvc.GetTravelByID(this.phone).subscribe((data3:TravelInsuranceModule[])=>{
        this.tlist=data3;
        console.log(this.tlist);
      })

      this.tcsvc.GetTravelClaimByID(this.phone).subscribe((data4:TravelclaiminfoModule[])=>{
        this.tclist=data4;
        console.log(this.tclist);
      })

      //this.svc.BuyInsurance().subscribe();{
        //localStorage.setItem('VID',this.vehinfo.VehicleID.toString());
        //this.ngzone.run(()=>this.router.navigateByUrl('/policy'));
        //console.log();
      //};
    }
    
    delete(id:number):void{
      this.svc.DeleteVehicle(id).subscribe((data:boolean)=>
      {
        if(data==true)
        {alert('deleted successful');
      location.reload();}
        else
        {
          alert('delete unsuccessful');
        }
      }
      );
  
    }
    buyinsurance(id:number,mob:number):void{
      console.log(id);
      console.log(mob);
      sessionStorage.setItem("idstore",id.toString());
      sessionStorage.setItem("mob",mob.toString());

      this.ngzone.run(()=>this.router.navigateByUrl('/policy'));

  
    }
    ClaimInsurance(id1:number, id2:number,mob:number):void{
      console.log(id1);
      console.log(id2);
      console.log(mob);
      sessionStorage.setItem("idstore1",id1.toString());
      sessionStorage.setItem("idstore2", id2.toString());
      sessionStorage.setItem("mob", mob.toString());


      this.ngzone.run(()=>this.router.navigateByUrl('/claim-insurance'));
    }
    
      ClaimTravel(id3:number,mob:number):void{
      console.log(id3);
      console.log(mob);
      sessionStorage.setItem("idstore3",id3.toString());
      sessionStorage.setItem("mob",mob.toString());
      this.ngzone.run(()=>this.router.navigateByUrl('/travelclaim'));

    }
}
