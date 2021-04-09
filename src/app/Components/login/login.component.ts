import { Component, OnInit, NgZone } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {UserInfoModule} from 'src/app/Modules/user-info/user-info.module';
import {UserInfoService} from 'src/app/Services/user-info.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any=[];
  svc:UserInfoService;
  mob:number;
  pwd:string;
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
  Login(LoginForm:NgForm):void{
    this.mob = this.model.mno;
    this.pwd= this.model.txtpass;
    alert(this.mob+','+this.pwd);

    this.svc.Login(this.mob,this.pwd).subscribe((data:string)=> {
    console.log(data);
    if(data=="Login Successful")
    {
      alert('Login successful');
      this.ngzone.run(()=>this.router.navigateByUrl('/BuyInsurance'));
    }
    else
    {
      alert('Invalid credentials');
    }
    });

  }

}
