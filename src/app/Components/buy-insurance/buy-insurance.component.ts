import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {UserInfoModule} from 'src/app/Modules/user-info/user-info.module';
import {UserInfoService} from 'src/app/Services/user-info.service';
import { VehicleinfomoduleModule } from 'src/app/Modules/vehicleinfomodule/vehicleinfomodule.module';
import { VehicleinfoserviceService } from 'src/app/Services/vehicleinfoservice.service';
//import { threadId } from 'node:worker_threads';
@Component({
  selector: 'app-buy-insurance',
  templateUrl: './buy-insurance.component.html',
  styleUrls: ['./buy-insurance.component.css']
})
export class BuyInsuranceComponent implements OnInit {

  model: any = [];
  svc:VehicleinfoserviceService;
  usr = new VehicleinfomoduleModule();
  ngzone: NgZone;
  router: Router;
  
  constructor(svc: VehicleinfoserviceService, ngzone: NgZone,
    router: Router) 
    {
      this.svc = svc;
      this.ngzone = ngzone;
      this.router = router;

    }

  ngOnInit(): void {
  }

  vehicleData(vehicleRegisteraionForm: NgForm):void
  {
    console.log(vehicleRegisteraionForm.value);
    //this.usr.VehicleID = buyinsuranceform.value.vid;
    this.usr.Maufacturer = vehicleRegisteraionForm.value.cbmanu; 
    this.usr.Model = vehicleRegisteraionForm.value.cbmodel;
    this.usr.DrivingLicense = vehicleRegisteraionForm.value.lic; 
    this.usr.VehicleType = vehicleRegisteraionForm.value.vtype;
    this.usr.RegistrationNo = vehicleRegisteraionForm.value.rno; 
    this.usr.EngineNo = vehicleRegisteraionForm.value.enum;
    this.usr.ChassisNo = vehicleRegisteraionForm.value.cnum; 
    this.usr.PurchaseDate = vehicleRegisteraionForm.value.pdate;
    this.usr.UserMobNo = vehicleRegisteraionForm.value.umob; 
    //alert(this.usr.VehicleID+','+this.usr.Maufacturer);
    this.svc.RegisterVehicle(this.usr).subscribe((data: boolean) =>
    {
      //alert(data);
      if(data==true)
      {
        alert('Susscessfully registered your vehicle');
        this.ngzone.run(()=>this.router.navigateByUrl('/policy'));

      }
  });
 
 }
}
