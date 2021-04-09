import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserInfoModule {
  MobNo: number;
  Email: string;
  UserName: string;
  Password: string;
  Address: string;
  DOB: Date;
 }
