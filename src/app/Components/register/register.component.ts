import { Component, OnInit, NgZone } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {UserInfoModule} from '../../Modules/user-info/user-info.module';
import {UserInfoService} from '../../Services/user-info.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any=[];
  svc:UserInfoService;
  usr=new UserInfoModule();
  ngzone: NgZone;
  router: Router;
  constructor(svc: UserInfoService, ngzone: NgZone,
    router: Router) 
    {
      this.svc=svc;
      this.ngzone = ngzone;
      this.router = router;

    }

  ngOnInit(): void {
  }
  

  RegisterData(regform: NgForm):void
  {
    console.log(regform.value);
    this.usr.MobNo=regform.value.mno;
    this.usr.Email=regform.value.txtemail;
    this.usr.UserName=regform.value.name;
    this.usr.Password=regform.value.txtpass;
    this.usr.Address=regform.value.city;
    this.usr.DOB=regform.value.dob;
    this.usr.Gender=regform.value.gen;

    this.svc.Register(this.usr).subscribe((data: boolean) =>
    {
      alert(data);
      if(data==true)
      {
        alert('New User Registered');
        this.ngzone.run(()=>this.router.navigateByUrl('/login'));
      }
      else
      {
        console.log(data);
        alert('Register UnSuccessfull');
      }
  });

 }

}


  