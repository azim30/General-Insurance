import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  model:any=[];


  constructor() { }

  ngOnInit(): void {
  }
  ContactData(conform:NgForm):void{
    console.log(conform.value);
  }

}