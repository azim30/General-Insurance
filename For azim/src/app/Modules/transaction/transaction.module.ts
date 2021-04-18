import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TransactionModule {
  TransactionID :Number;
    Motor_PolicyNo :Number;
    Travel_PolicyNo :Number;
  TransactionDate:string; 
   Status :string;
 }
