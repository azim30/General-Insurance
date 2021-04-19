import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {TravelclaiminfoModule} from '../../Modules/travelclaiminfo/travelclaiminfo.module';
import {TravelclaiminfoService} from '../../Services/travelclaiminfo.service';
import { HttpClient } from '@angular/common/http';
import {ClaiminfoModule} from '../../Modules/claiminfo/claiminfo.module';
import {ClaiminfoService} from '../../Services/claiminfo.service';
import { PolicyinfoModule } from '../../Modules/policyinfo/policyinfo.module';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-travelclaim',
  templateUrl: './travelclaim.component.html',
  styleUrls: ['./travelclaim.component.css']
})
export class TravelclaimComponent implements OnInit {

  model: any = [];
  svc:TravelclaiminfoService;
  //usr = new VehicleInfoModule();
  tclm = new TravelclaiminfoModule();
  //plist: PolicyinfoModule[];
  ngzone: NgZone;
  router: Router;
  idstore1 : any;
  idstore2: any;
  idstore3: any;
  constructor(svc: TravelclaiminfoService, ngzone: NgZone,
    router: Router) 
    {
      this.svc = svc;
      this.ngzone = ngzone;
      this.router = router;

    }
  

  ngOnInit(): void {
    this.idstore3= sessionStorage.getItem("idstore3");
    console.log(this.idstore3);
    this.model.tNo=this.idstore3;
  }
  claimData(TravelclaimForm: NgForm):void
  {
    console.log(TravelclaimForm.value);
    //this.usr.VehicleID = buyinsuranceform.value.vid;
    this.tclm.PolicyNo = TravelclaimForm.value.tNo;
    this.tclm.MobNo = TravelclaimForm.value.mno;
    //this.clm.VehID = claimInsuranceForm.value.vehid;
    //this.clm.PolNo = claimInsuranceForm.value.polid;
    this.tclm.Reason_for_Claim = TravelclaimForm.value.creason;
    this.tclm.Amount = TravelclaimForm.value.price;
    //this.clm.ClaimDate = claimInsuranceForm.value.cdate;
    this.tclm.Claim_Status = "Pending";
    //alert(this.usr.VehicleID+','+this.usr.Maufacturer);
    this.svc.RegisterTravelClaim(this.tclm).subscribe((data: boolean) =>
    {
      alert(data);
      if(data==true)
      {
        alert('Susscessfully registered your claim');
        //this.ngzone.run(()=>this.router.navigateByUrl('/user-dashboard'));
      }
    });
  }

}