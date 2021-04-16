import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {UserInfoModule} from '../../Modules/user-info/user-info.module';
import {UserInfoService} from '../../Services/user-info.service';
import { VehicleInfoModule } from '../../Modules/vehicle-info/vehicle-info.module';
import { VehicleinfoService } from '../../Services/vehicleinfo.service';
import { PolicyinfoModule } from '../../Modules/policyinfo/policyinfo.module';
import { PolicyinfoService } from '../../Services/policyinfo.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  model: any = [];
  svc: VehicleinfoService;
  psvc: PolicyinfoService;
  usr: VehicleInfoModule[];
  usrinfo =new UserInfoModule();
  vehinfo = new VehicleInfoModule();
  vehlist: VehicleInfoModule[];
  pollist: PolicyinfoModule[];
  buttonName1:string;
  buttonName2: string;
  ngzone: NgZone;
  router: Router;
  phone: number;
  GetAllVehicles(){
    this.buttonName1="GetAllVehicles";
  }
  GetPolicies(){
    this.buttonName2="GetPolicies";
  }
  
  constructor(svc: VehicleinfoService,psvc: PolicyinfoService, ngzone: NgZone,
    router: Router) 
    {
      this.svc = svc;
      this.psvc = psvc;
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
}
