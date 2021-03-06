import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {UserInfoModule} from '../../Modules/user-info/user-info.module';
import {UserInfoService} from '../../Services/user-info.service';
import { VehicleInfoModule } from '../../Modules/vehicle-info/vehicle-info.module';
import { VehicleinfoService } from '../../Services/vehicleinfo.service';
import { PolicyinfoModule } from '../../Modules/policyinfo/policyinfo.module';
import { PolicyinfoService } from '../../Services/policyinfo.service';
import { ClaiminfoModule } from 'src/app/Modules/claiminfo/claiminfo.module';
import { ClaiminfoService } from 'src/app/Services/claiminfo.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  model: any = [];
  svc: VehicleinfoService;
  psvc: PolicyinfoService;
  csvc: ClaiminfoService;
  usr: VehicleInfoModule[];
  usrinfo =new UserInfoModule();
  vehinfo = new VehicleInfoModule();
  vehlist: VehicleInfoModule[];
  pollist: PolicyinfoModule[];
  clist: ClaiminfoModule[];
  buttonName1:string;
  buttonName2: string;
  buttonName3: string;
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

  
  constructor(svc: VehicleinfoService,psvc: PolicyinfoService,csvc: ClaiminfoService, ngzone: NgZone,
    router: Router) 
    {
      this.svc = svc;
      this.psvc = psvc;
      this.csvc = csvc;
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
    buyinsurance(id:number):void{
      console.log(id);
      sessionStorage.setItem("idstore",id.toString());
      this.ngzone.run(()=>this.router.navigateByUrl('/policy'));

  
    }
    ClaimInsurance(id1:number, id2:number):void{
      console.log(id1);
      console.log(id2);
      sessionStorage.setItem("idstore1",id1.toString());
      sessionStorage.setItem("idstore2", id2.toString());

      this.ngzone.run(()=>this.router.navigateByUrl('/claim-insurance'));

  
    }
}
