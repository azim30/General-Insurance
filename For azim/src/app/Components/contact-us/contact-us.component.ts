import { Component, OnInit, NgZone } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {ContactModule} from '../../Modules/contact/contact.module';
import {ContactService} from '../../Services/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  model:any=[];
  svc:ContactService;
  usr=new ContactModule();
  ngzone: NgZone;
  router: Router;
  constructor(svc: ContactService, ngzone: NgZone,
    router: Router) 
    {
      this.svc=svc;
      this.ngzone = ngzone;
      this.router = router;

    }
  ngOnInit(): void {
  }
  ContactData(conform:NgForm):void{
    console.log(conform.value);
    this.usr.MobNo=conform.value.mno;
    this.usr.Email=conform.value.txtemail;
    this.usr.UserName=conform.value.name;
    this.usr.Subject=conform.value.sub;
    this.usr.Message=conform.value.msg;

    this.svc.RegisterCon(this.usr).subscribe((data: boolean) =>
    {
      alert(data);
      if(data==true)
      {
        alert('Message Sent Successfully');
        this.ngzone.run(()=>this.router.navigateByUrl('/login'));
      }
      else
      {
        console.log(data);
        alert('Message Not Sent');
      }
  });

  }

}