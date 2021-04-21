import { Component, OnInit, NgZone } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {UserInfoModule} from '../../Modules/user-info/user-info.module';
import {UserInfoService} from '../../Services/user-info.service';
import {Router} from '@angular/router';
import { ValidateEqualModule } from 'ng-validate-equal';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  //siteKey: string;
  model:any=[];
  svc:UserInfoService;
  usr= new UserInfoModule;
  email:string;
  password:string;
  ngzone: NgZone;
  router: Router;
  flag:boolean=false;
  constructor(svc: UserInfoService, ngzone: NgZone,
    router: Router)  { 
      //this.siteKey = '6Lf3gaYaAAAAAH-YXqr19QCQARQpSuMS7GTyiLm6';
      this.svc=svc;
      this.ngzone = ngzone;
      this.router = router;}

  ngOnInit(): void {
  }
  EmailVerify:boolean=true;
  Acknowledgement:boolean=false;
  ResetPwd:boolean=false;

  ForgotData(regform:NgForm):void
  {
    console.log(regform.value);
    this.usr.Email= regform.value.txtemail;


    this.svc.ChkEmail(this.usr.Email).subscribe((data:string)=> {
      console.log(data);
      if(data=="success")
      {
        alert('Email is present in system');
        this.flag=true;
        this.svc.VerifyLinkEmail(this.usr).subscribe((data:string)=>{
          if(data=="success")
          {
            alert('Verification link is sent');
            this.EmailVerify=false;
            this.Acknowledgement=true;
            this.ResetPwd=true;
          }
          else{
            alert('Sending link failed!!');
          }
        });
      }
      else{
        alert('Email ID not found!!');
      }
    });  
   
  }
  ResetPassword(PassReset: NgForm): void {
    this.usr.OTP = PassReset.value.otp;
    this.usr.Password = PassReset.value.pass;
    if(this.usr.Password!=PassReset.value.pass2)
      alert("Password not matching");
    else
  {
      this.svc.SetNewPassword(this.usr).subscribe((data:boolean)=>{
        if (data == true) {
          alert('Password is Updated');
        }
        else {
          alert('Password Updation failed!!');
        }
  
      });
  }
  }

  
}
