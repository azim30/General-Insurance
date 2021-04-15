import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {UserInfoModule} from 'src/app/Modules/user-info/user-info.module';
import {UserInfoService} from 'src/app/Services/user-info.service';
import { PolicyinfoModule } from 'src/app/Modules/policyinfo/policyinfo.module';
import { PolicyinfoService } from 'src/app/Services/policyinfo.service';

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

  constructor(svc: PolicyinfoService, ngzone: NgZone,
    router: Router) 
    {
      this.svc = svc;
      this.ngzone = ngzone;
      this.router = router;

    }

  ngOnInit(): void {
  }
  policyData(policydetailsform: NgForm):void
  {
    console.log(policydetailsform.value);
    this.pol.UserMobNo = policydetailsform.value.umob;
    this.pol.VehID = policydetailsform.value.vid;
    this.pol.PolicyName = policydetailsform.value.vid;
    this.pol.Period = policydetailsform.value.period;
    this.pol.PolicyAmt = (policydetailsform.value.period)*1000;
    this.pol.PolicyStatus = 'Inactive';
    this.pol.StartDate = policydetailsform.value.sdate;
    this.pol.EndDate = policydetailsform.value.edate;
    //alert(this.usr.VehicleID+','+this.usr.Maufacturer);
    this.svc.PolicyDetails(this.pol).subscribe((data: boolean) =>
    {
      //alert(data);
      if(data==true)
      {
        alert('Susscessfully purchased insurance.');
        //this.ngzone.run(()=>this.router.navigateByUrl('/policy'));

      }
  });
 
 }

}
