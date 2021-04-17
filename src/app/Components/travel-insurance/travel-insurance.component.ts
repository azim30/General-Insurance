import { Component, OnInit,NgZone } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {Router  } from "@angular/router";
import {TravelInsuranceService } from '../../services/travel-insurance.service';
 import {TravelInsuranceModule} from'../../Modules/travel-insurance/travel-insurance.module'
@Component({
  selector: 'app-travel-insurance',
  templateUrl: './travel-insurance.component.html',
  styleUrls: ['./travel-insurance.component.css']
})
export class TravelInsuranceComponent implements OnInit {
  model:any=[];
  svc:TravelInsuranceService;
  usr=new TravelInsuranceModule();
  ngzone: NgZone;
  router: Router;


  constructor(svc: TravelInsuranceService, ngzone: NgZone,
    router: Router) 
    {
      this.svc=svc;
      this.ngzone = ngzone;
      this.router = router;
     }

  ngOnInit(): void {
  }
  RegisterData(travelform:NgForm):void{
    console.log(travelform.value);
    
    this.usr.Source=travelform.value.source;
    this.usr.Destination=travelform.value.destination;
    this.usr.TripStart=travelform.value.sdate;
    this.usr.TripEnd=travelform.value.edate;
    this.usr.Name=travelform.value.uname;
    this.usr.Address =travelform.value.address;
    this.usr.Age =travelform.value.age;
    this.usr.MobileNo =travelform.value.mno;
    this.usr. NoOfPassengers =travelform.value.npassenger;
    this.usr.IPlan=travelform.value.plan;
    this.svc.RegisterTravelDetails(this.usr).subscribe((data: boolean) =>
    {
      alert(data);
      if(data==true)
      {
        alert('New User Registered');
        this.ngzone.run(()=>this.router.navigateByUrl('/RegisterTravelDetails'));
      }
    });

  }
 
 }
 
