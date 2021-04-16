import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PolicyinfoModule {
  PolicyNo: number;
  UserMobNo: number;
  VehID: number;
  PolicyName: string;
  Period: number;
  PolicyAmt: number;
  PolicyStatus: string;
  StartDate: Date;
  EndDate: Date;

 }