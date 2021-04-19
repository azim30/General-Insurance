import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {VehicleInfoModule} from '../../Modules/vehicle-info/vehicle-info.module';
import {VehicleinfoService} from '../../Services/vehicleinfo.service';


@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {
  model: any = [];
  svc:VehicleinfoService;
  usr = new VehicleInfoModule();
  vlist: VehicleInfoModule[];
  ngzone: NgZone;
  router: Router;
  constructor(svc:VehicleinfoService) {this.svc=svc; }

  ngOnInit(): void {
    this.svc.GetAllVehicles().subscribe((data:VehicleInfoModule[])=>
    {
      this.vlist=data;
    });
    this.model.cbmanu=localStorage.getItem('Man');
    this.model.cbmodel=localStorage.getItem('Mod');
    this.model.lic=localStorage.getItem('Dr');
    this.model.vtype=localStorage.getItem('Vt');
    this.model.rno=localStorage.getItem('Reg');
    this.model.enum=localStorage.getItem('Eng');
    this.model.cnum=localStorage.getItem('Chas');
    this.model.pdate=localStorage.getItem('Pdate');
    this.model.umob=localStorage.getItem('Mob');
    this.model.price=localStorage.getItem('Prc');

  }
  vehicleData(vehicleRegisterationForm:NgForm):void
  {
    console.log(this.model.value);
  }

}
