import { Component,Input, OnInit,NgZone } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import{TransactionService} from '../../services/transaction.service';
import{TransactionModule} from '../../Modules/transaction/transaction.module';
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
  transaction:TransactionService;
  tran=new TransactionModule();
  trav=new TravelInsuranceModule();
  ngzone: NgZone;
  router: Router;
  tpno:any;

  amtstore: any;

  constructor(transaction: TransactionService, ngzone: NgZone,
    router: Router) 
    {
      this.transaction=transaction;
      this.ngzone = ngzone;
      this.router = router;
     } 

  ngOnInit(): void {
    this.tpno= sessionStorage.getItem("idstore1");
    console.log(this.tpno);
    //this.model =this.tpno;
    this.amtstore= sessionStorage.getItem("amtstore");
    console.log(this.amtstore);
  
  }
  RegisterData(regform:NgForm):void{
    console.log(regform.value);
    this.tran.Motor_PolicyNo = this.tpno;
    //this.tran.Travel_PolicyNo = this.
    this.tran.Status="Successfull";
    this.tran.TransactionDate=new Date().toDateString();
  }

}
