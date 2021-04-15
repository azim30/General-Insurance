import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {UserInfoModule} from 'src/app/Modules/user-info/user-info.module';
import {UserInfoService} from 'src/app/Services/user-info.service';
import { VehicleinfomoduleModule } from 'src/app/Modules/vehicleinfomodule/vehicleinfomodule.module';
import { VehicleinfoserviceService } from 'src/app/Services/vehicleinfoservice.service';
@Component({
  selector: 'app-registervehicle',
  templateUrl: './registervehicle.component.html',
  styleUrls: ['./registervehicle.component.css']
})
export class RegistervehicleComponent implements OnInit {

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

  vehicleData(vehicleRegisterationForm: NgForm):void
  {
    console.log(vehicleRegisterationForm.value);
    //this.usr.VehicleID = buyinsuranceform.value.vid;
    this.usr.Maufacturer = vehicleRegisterationForm.value.cbmanu; 
    this.usr.Model = vehicleRegisterationForm.value.cbmodel;
    this.usr.DrivingLicense = vehicleRegisterationForm.value.lic; 
    this.usr.VehicleType = vehicleRegisterationForm.value.vtype;
    this.usr.RegistrationNo = vehicleRegisterationForm.value.rno; 
    this.usr.EngineNo = vehicleRegisterationForm.value.enum;
    this.usr.ChassisNo = vehicleRegisterationForm.value.cnum; 
    this.usr.PurchaseDate = vehicleRegisterationForm.value.pdate;
    this.usr.UserMobNo = vehicleRegisterationForm.value.umob; 
    //alert(this.usr.VehicleID+','+this.usr.Maufacturer);
    this.svc.RegisterVehicle(this.usr).subscribe((data: boolean) =>
    {
      //alert(data);
      if(data==true)
      {
        alert('Susscessfully registered your vehicle');
        this.ngzone.run(()=>this.router.navigateByUrl('/userhomepage'));

      }
  });
 
 }


}

