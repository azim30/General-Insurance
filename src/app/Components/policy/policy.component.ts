import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {UserInfoModule} from '../../Modules/user-info/user-info.module';
import {UserInfoService} from '../../Services/user-info.service';
import { PolicyinfoModule } from '../../Modules/policyinfo/policyinfo.module';
import { PolicyinfoService } from '../../Services/policyinfo.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  model: any = [];
  svc:PolicyinfoService;
  pol = new PolicyinfoModule();
  ngzone: NgZone;
  router: Router;
idstore : any;
PolicyA : number;
today: string;
mob: any;

  constructor(svc: PolicyinfoService, ngzone: NgZone,
    router: Router) 
    {
      this.svc = svc;
      this.ngzone = ngzone;
      this.router = router;

    }

  ngOnInit(): void {
    this.today = new Date().toISOString().split('T')[0];

    this.idstore= sessionStorage.getItem("idstore");
    console.log(this.idstore);
    this.model.vid=this.idstore;

    this.mob= sessionStorage.getItem("mob");
    console.log(this.mob);
    this.model.umob=this.mob;
  }
  try(){
    if(this.model.pname == "gold"){
      this.PolicyA = (this.model.period)*1550;

    }
    else
    this.PolicyA = (this.model.period)*900;


  }
  policyData(policydetailsform: NgForm):void
  {
    console.log(policydetailsform.value);
    this.pol.UserMobNo = policydetailsform.value.umob;
    this.pol.VehID = this.model.vid;
    this.pol.PolicyName = policydetailsform.value.pname;
    this.pol.Period = policydetailsform.value.period;
    this.pol.PolicyAmt = (this.model.period)*1000;
   
    this.pol.PolicyStatus = 'Active';
    this.pol.StartDate = policydetailsform.value.sdate;
    //alert(this.usr.VehicleID+','+this.usr.Maufacturer);
    this.svc.PolicyDetails(this.pol).subscribe((data: boolean) =>
    {
      //alert(data);
      if(data==true)
      {
        alert('Susscessfully purchased insurance.');
        this.ngzone.run(()=>this.router.navigateByUrl('/user-dashboard'));

      }
  });
 
 }

}