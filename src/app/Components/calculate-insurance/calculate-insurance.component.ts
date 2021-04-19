import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm,FormControl} from '@angular/forms';
import  {FormGroupDirective} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

//Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface Car {
  value: string;
  viewValue: string;
}

interface CarGroup {
  name: string;
  Car: Car[];
}
@Component({
  selector: 'app-calculate-insurance',
  templateUrl: './calculate-insurance.component.html',
  styleUrls: ['./calculate-insurance.component.css']
})
export class CalculateInsuranceComponent {
//declaration of form elements
public brand!: string;
public fuel!: string;
public registyear!: number;
public price!: number;
 public premium!: number;
//declaration of variables for calculating premium amount
idv_rate:number=0.05;
presentdate:Date=new Date();
presentyear:number=this.presentdate.getFullYear();
diff:number=0;
idv:number=0;
getPremium(premiumform:NgForm):void{
 
  alert("Details successsfully entered");
 this.diff=this.presentyear-this.registyear;
 if(this.diff> 1 && this.diff < 2){this.idv_rate=0.15;} 
 else if(this.diff>2&&this.diff<3){this.idv_rate=0.20;}
 else if(this.diff>3&&this.diff<4){this.idv_rate=0.30;} 
 else if(this.diff>4&&this.diff<5){this.idv_rate=0.40;} 
 else if(this.diff>5){this.idv_rate=0.5;}
 else {this.idv_rate=0.05;}
 this.idv=this.price-this.idv_rate*this.price;  
 this.premium=this.idv*0.03




}


 


 

 constructor() {

 }
  
   
 
 CarControl=new FormControl();
  carGroups:CarGroup[]=[
  { name:'TATA',
    Car:[{value:'NANO',viewValue:'NANO'},
         {value:'Altroz',viewValue:'Altroz'},
         {value:'INDICA-V2',viewValue:'INDICA V2'},
         {value:'NEXON',viewValue:'NEXON'},
         {value:'TIAGO',viewValue:'TIAGO'},
         {value:'TIGOR',viewValue:'TIGOR'},
         {value:'SAFARI-DICOR',viewValue:'SAFARI DICOR'},
         {value:'ZEST',viewValue:'ZEST'},
       ]
   },
   { name:'Maruti-Suzuki',
    Car:[{value:'ALTO',viewValue:'ALTO'},
         {value:'ALTO-800',viewValue:'ALTO 800'},
         {value:'ALTO-K10',viewValue:'ALTO K10'},
         {value:'BALENO',viewValue:'BALENO'},
         {value:'CELERIO',viewValue:'CELERIO'},
         {value:'DZire',viewValue:'DZire'},
         {value:'Ertiga',viewValue:'Ertiga'},
         {value:'RITZ',viewValue:'RITZ'},
       ]
   },
   { name:'MAHINDRA',
    Car:[{value:'BOLERO',viewValue:'BOLERO'},
         {value:'KUV-100',viewValue:'KUV-100'},
         {value:'SCORPIO',viewValue:'SCORPIO'},
         {value:'TUV-300',viewValue:'TUV-300'},
         {value:'XUV-500',viewValue:'XUV 500'},
         {value:'XUV-300',viewValue:'XUV 300'},
         {value:'SCORPIO-M-HAWK',viewValue:'Ertiga'},
         {value:'XYLO',viewValue:'XYLO'},
       ]
   },
   { name:'Hyundai',
   Car:[{value:'Creta',viewValue:'Creta'},
        {value:'i-10',viewValue:'I 10'},
        {value:'i-20',viewValue:'I 20'},
        {value:'Santro',viewValue:'Santro'},
        {value:'EON',viewValue:'EON'},
        {value:'Grand-I-10',viewValue:'Grand I 10'},
        {value:'Fludic-Verna',viewValue:'Fludic-Verna'},
        {value:'XCENT',viewValue:'XCENT'},
      ]
  },
  { name:'TOYOTA',
    Car:[{value:'Etios',viewValue:'Etios'},
         {value:'Etios LIVA',viewValue:'Etios LIVA'},
         {value:'FORTUNER',viewValue:'FORTUNER'},
         {value:'INNOVA',viewValue:'INNOVA'},
         {value:'LandCruiser',viewValue:'LandCruiser'},
         {value:'COROLLA',viewValue:'COROLLA'},
         {value:'QUALIS',viewValue:'QUALIS'},
      
     ]
 },
 { name:'HONDA',
 Car:[{value:'Amaze',viewValue:'Amaze'},
      {value:'ACCORD',viewValue:'ACCORD'},
      {value:'CITY',viewValue:'CITY'},
      {value:'NEW-CITY',viewValue:'NEW-CITY'},
      {value:'CIVIC',viewValue:'CIVIC'},
      {value:'BRIO',viewValue:'BRIO'},
      {value:'JAZZ',viewValue:'JAZZ'},
      {value:'WR-V',viewValue:'WR-V'},
    ]
}, ];



}