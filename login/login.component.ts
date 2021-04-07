import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any=[];


  constructor() { }

  ngOnInit(): void {
  }
  LoginData(logform:NgForm):void{
    console.log(logform.value);
  }

}