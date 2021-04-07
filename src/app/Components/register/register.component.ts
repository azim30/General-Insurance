import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import{CustInfoModule} from'../../Modules/cust-info/cust-info.module';
import{CustomerInfoService} from '../../Services/customer-info.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any=[];
svc: CustomerInfoService;
cust: new CustInfoModule();

  constructor(svc:CustomerInfoService) {this.svc=svc; }

  ngOnInit(): void {
  }
  RegisterData(regform:NgForm):void{
    console.log(regform.value);
    this.cust.MobNo=regform.value.mno;
    this.cust.Email=regform.value.txtemail;
    this.cust.UserName=regform.value.name;
    this.cust.Password=regform.value.txtpass;
    this.cust.Address=regform.value.city;
    this.cust.DOB=regform.value.dob;
    this.svc.InsertCustomer(this.cust).subscribe((data: boolean) =>
    {
      alert(data);
      if(data==true)
      {
        alert('New Customer Registered');
      }
  });
  }

}
