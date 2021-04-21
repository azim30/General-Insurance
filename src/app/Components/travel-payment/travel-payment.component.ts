import { Component,Input, OnInit,NgZone } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';

import {Router  } from "@angular/router";
import{TravelInsuranceService} from '../../Services/travel-insurance.service';
import{TravelInsuranceModule} from '../../Modules/travel-insurance/travel-insurance.module';
@Component({
  selector: 'app-travel-payment',
  templateUrl: './travel-payment.component.html',
  styleUrls: ['./travel-payment.component.css']
})
export class TravelPaymentComponent implements OnInit {

  model:any=[];
  PolicyNo:any;
  transaction:TravelInsuranceService;
  trav=new TravelInsuranceModule();
  ngzone: NgZone;
  router: Router;
  tpno:any;
  mpno: any;
  amtstore: any;

  constructor(transaction: TravelInsuranceService, ngzone: NgZone,
    router: Router) 
    {
      this.transaction=transaction;
      this.ngzone = ngzone;
      this.router = router;
     } 

  ngOnInit(): void {
    this.tpno= sessionStorage.getItem("idstore1");
    console.log(this.tpno);
    this.model.Travel_PolicyNo =this.tpno;
    this.mpno= sessionStorage.getItem("idstore1");
    console.log(this.mpno);
    this.model.Motor_PolicyNo =this.mpno;
    this.amtstore= sessionStorage.getItem("amtstore");
    console.log(this.amtstore);
  
  }
  RegisterData(regform:NgForm):void{
    console.log(regform.value);

    //this.tran.PaymentTravel(this.tran).subscribe((data: boolean) =>
    
      //alert(data);
      //if(data==true)
      {
        alert('Succesful');
        //sessionStorage.setItem("amtstore",this.PolicyA.toString());
        this.ngzone.run(()=>this.router.navigateByUrl('/user-dashboard'));
      }
    //);
  }

}