import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class VehicleInfoModule {

  VehicleID:number;
  UserMobNo:string;
  Manufacturer:string;
  Model:string;
  VehicleType:string;
  DrivingLicense:string;
  RegistrationNo:string;
  EngineNo:string;
  ChassisNo:string;
  PurchaseDate:Date;
  Price:number;
 }
