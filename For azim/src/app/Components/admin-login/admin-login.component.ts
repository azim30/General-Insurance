import { Component, OnInit, NgZone } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {AdminloginService} from '../../Services/adminlogin.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  siteKey: string;

  model:any=[];
  svc: AdminloginService;
  mob:number;
  pwd:string;
  ngzone: NgZone;
  router: Router;
  constructor(svc: AdminloginService, ngzone: NgZone,
    router: Router) 
    {
      this.siteKey = '6Lf3gaYaAAAAAH-YXqr19QCQARQpSuMS7GTyiLm6';

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
      alert('Admin Login successful');
      this.ngzone.run(()=>this.router.navigateByUrl('/admin-dashboard'));
     
    }
    else
    {
      alert('Invalid credentials');
      
    }
    });

  }
 
}
