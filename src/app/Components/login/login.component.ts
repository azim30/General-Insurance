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
  siteKey: string;

  model:any=[];
  svc:UserInfoService;
  mob:number;
  pwd:string;
  user:string;
  ngzone: NgZone;
  router: Router;
  constructor(svc: UserInfoService, ngzone: NgZone,
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
    //alert(this.mob+','+this.pwd);

    

    this.svc.Login(this.mob,this.pwd).subscribe((data:string)=> {
    console.log(data);
    if(data=="Login Successful")
    {
      alert('Login successful');
      localStorage.setItem('PID',this.mob.toString());

      this.svc.GetUser(this.mob.toString()).subscribe((data2:string)=>{
        this.user=data2;
        alert(data2);
        localStorage.setItem('Uname',data2);
      });
      
      this.ngzone.run(()=>this.router.navigateByUrl('/user-dashboard'));
    }
    else
    {
      alert('Invalid credentials');
      
    }
    });

  }
 

}
