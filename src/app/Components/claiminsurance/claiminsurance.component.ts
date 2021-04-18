import { formatDate } from '@angular/common';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {VehicleInfoModule} from '../../Modules/vehicle-info/vehicle-info.module';
import {VehicleinfoService} from '../../Services/vehicleinfo.service';
import { HttpClient } from '@angular/common/http';
import {ClaiminfoModule} from '../../Modules/claiminfo/claiminfo.module';
import {ClaiminfoService} from '../../Services/claiminfo.service';
import { PolicyinfoModule } from '../../Modules/policyinfo/policyinfo.module';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';


@Component({
  selector: 'app-claiminsurance',
  templateUrl: './claiminsurance.component.html',
  styleUrls: ['./claiminsurance.component.css']
})
export class ClaiminsuranceComponent implements OnInit {  

  model: any = [];
  svc:ClaiminfoService;
  usr = new VehicleInfoModule();
  clm = new ClaiminfoModule();
  plist: PolicyinfoModule[];
  ngzone: NgZone;
  router: Router;
  idstore1 : any;
  idstore2: any;
  constructor(svc: ClaiminfoService, ngzone: NgZone,
    router: Router) 
    {
      this.svc = svc;
      this.ngzone = ngzone;
      this.router = router;

    }

   getToday():string{
     let date=new Date();
     return formatDate(date, 'yyyy-MM-dd', 'en');
   }
  
   ngOnInit(): void {
    this.idstore1= sessionStorage.getItem("idstore1");
    console.log(this.idstore1);
    this.model.polid=this.idstore1;
    this.idstore2= sessionStorage.getItem("idstore2");
    console.log(this.idstore2);
    this.model.vehid=this.idstore2;
    
   }
   
   claimData(claimInsuranceForm: NgForm):void
  {
    console.log(claimInsuranceForm.value);
    //this.usr.VehicleID = buyinsuranceform.value.vid;
    this.clm.UserMobNo = claimInsuranceForm.value.umob;
    this.clm.VehID = claimInsuranceForm.value.vehid;
    this.clm.PolNo = claimInsuranceForm.value.polid;
    this.clm.ClaimReason = claimInsuranceForm.value.creason;
    this.clm.ClaimAmt = claimInsuranceForm.value.price;
    this.clm.ClaimDate = claimInsuranceForm.value.cdate;
    this.clm.ClaimStatus = "Pending";
    //alert(this.usr.VehicleID+','+this.usr.Maufacturer);
    this.svc.RegisterClaim(this.clm).subscribe((data: boolean) =>
    {
      alert(data);
      if(data==true)
      {
        alert('Susscessfully registered your claim');
        this.ngzone.run(()=>this.router.navigateByUrl('/userdashboard'));
      }
    });
  }
}   