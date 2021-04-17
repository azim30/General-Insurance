import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ClaiminfoModule {
  ClaimNo: number;
  UserMobNo: string;
  VehID: number;
  PolNo: number;
  ClaimReason: string;
  ClaimStatus: string;
  ClaimAmt: number;
  ClaimDate: Date;
 }