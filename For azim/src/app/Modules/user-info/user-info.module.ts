import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserInfoModule {
  MobNo: string;
  Email: string;
  UserName: string;
  Password: string;
  Address: string;
  DOB: Date;
  Gender: string;
  OTP: string;
 }
