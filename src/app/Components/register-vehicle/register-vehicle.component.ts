import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {VehicleInfoModule} from '../../Modules/vehicle-info/vehicle-info.module';
import {VehicleinfoService} from '../../Services/vehicleinfo.service';


@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.css']
})
export class RegisterVehicleComponent implements OnInit {

  model: any = [];
  svc:VehicleinfoService;
  usr = new VehicleInfoModule();
  ngzone: NgZone;
  router: Router;
  
  constructor(svc: VehicleinfoService, ngzone: NgZone,
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
    this.usr.Manufacturer = vehicleRegisterationForm.value.cbmanu; 
    this.usr.Model = vehicleRegisterationForm.value.cbmodel;
    this.usr.DrivingLicense = vehicleRegisterationForm.value.lic; 
    this.usr.VehicleType = vehicleRegisterationForm.value.vtype;
    this.usr.RegistrationNo = vehicleRegisterationForm.value.rno; 
    this.usr.EngineNo = vehicleRegisterationForm.value.enum;
    this.usr.ChassisNo = vehicleRegisterationForm.value.cnum; 
    this.usr.PurchaseDate = vehicleRegisterationForm.value.pdate;
    this.usr.UserMobNo = vehicleRegisterationForm.value.umob; 
    this.usr.Price= vehicleRegisterationForm.value.price;
    //alert(this.usr.VehicleID+','+this.usr.Maufacturer);
    this.svc.Register(this.usr).subscribe((data: boolean) =>
    {
      
      //alert(data);
      if(data==true)
      {
        alert('Susscessfully registered your vehicle');
        this.ngzone.run(()=>this.router.navigateByUrl('/user-dashboard'));

      }
      localStorage.setItem('Man',this.usr.Manufacturer);
      localStorage.setItem('Mod',this.usr.Model);
      localStorage.setItem('Dr',this.usr.DrivingLicense);
      localStorage.setItem('Vt',this.usr.VehicleType);
      localStorage.setItem('Reg',this.usr.RegistrationNo);
      localStorage.setItem('Eng',this.usr.EngineNo);
      localStorage.setItem('Chas',this.usr.ChassisNo);
      localStorage.setItem('Pdate',this.usr.PurchaseDate.toString());
      localStorage.setItem('Mob',this.usr.UserMobNo);
      localStorage.setItem('Prc',this.usr.Price.toString());
  });
 
 }



}
