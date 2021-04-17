import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TravelInsuranceModule { 
   PolicyNo:number;
   Source :string;
   Destination:string;
  TripStart:Date; 
 TripEnd :Date;
  Name:string;
Address :string;
     Age :number;
     MobileNo :string;
      NoOfPassengers :number;
     IPlan:string;
}
