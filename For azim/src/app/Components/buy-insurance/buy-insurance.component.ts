import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-buy-insurance',
  templateUrl: './buy-insurance.component.html',
  styleUrls: ['./buy-insurance.component.css']
})
export class BuyInsuranceComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  

}
