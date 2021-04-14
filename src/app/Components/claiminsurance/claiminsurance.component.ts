import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Motorclaim } from '../../../app/Modules/motorclaim';

//import { Travelclaim } from '../model/travelclaim';
import { ClaimService } from '../../Services/claim.service';

@Component({
  selector: 'app-claiminsurance',
  templateUrl: './claiminsurance.component.html',
  styleUrls: ['./claiminsurance.component.css']
})
export class ClaiminsuranceComponent implements OnInit {

   //MotorClaim
   theftBool: boolean
   otherBool: boolean
   choice: string;
   //TravelClaim
   theftBoolForTravel: boolean
   otherBoolForTravel: boolean
   choiceFortravel: string
   //Motor Claim
   motorClaimForm: FormGroup = new FormGroup({});
   motorClaimFormForTheft: FormGroup = new FormGroup({});
   //Travel Claim
   travelClaimForm: FormGroup = new FormGroup({});
   travelClaimFormForTheft: FormGroup = new FormGroup({});
  // travelclaim: Travelclaim
   userMobile=sessionStorage.getItem("userMobile");
   travelClaimFormForAccident: FormGroup = new FormGroup({​​}​​);
   //travel Claim
   fileToUpload: File | any;
   fileToUpload2: File | any;
 
   //Motor Claim
   licenceUpload: File | any;
   rcUpload: File | any;
   insuranceUpload: File | any;
   billUpload: File | any;
   rtoUpload:File|any;
   motorclaim: Motorclaim;
 
   reason:any;
 
   constructor(private httpclient: HttpClient,private router:Router, private claimService: ClaimService, private route: Router, private fb: FormBuilder) {
    // this.travelclaim = new Travelclaim();
     this.motorclaim = new Motorclaim();
     //Motor Claim
     this.theftBool = false;
     this.otherBool = false;
     this.choice = "";
     //Motorclaim Validation for Accident,Manmade disaster,Natural Disaster
     this.motorClaimForm = fb.group({
       Policy_Id: ['', [Validators.required, Validators.pattern("[0-9]*")]],
       Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
       Mobile_Number: ['', [Validators.required, Validators.minLength(10), Validators.pattern("[0-9]*")]],
       Reason: ['', [Validators.required]],
       Date_Of_Applying: ['', [Validators.required]],
       Estimated_Amount_For_Repair: ['', [Validators.required]],
       License_Copy: ['', [Validators.required]],
       RC_Copy: ['', [Validators.required]],
       Insurance_Copy: ['', [Validators.required]],
       Bill_Copy: ['', [Validators.required]],
     });
     //Motorclaim Validation for Accident,Manmade disaster,Natural Disaster
     this.motorClaimFormForTheft = fb.group({
       Policy_Id: ['', [Validators.required, Validators.pattern("[0-9]*")]],
       Name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
       Mobile_Number: ['', [Validators.required, Validators.minLength(10), Validators.pattern("[0-9]*")]],
       Reason: ['', [Validators.required]],
       Date_Of_Applying: ['', [Validators.required]],
       License_Copy: ['', [Validators.required]],
       RC_Copy: ['', [Validators.required]],
       Insurance_Copy: ['', [Validators.required]],
       Authenticated_Letter_from_RTO: ['', [Validators.required]],
 
     });
 
     //Travel Claim
     this.theftBoolForTravel = false;
     this.otherBoolForTravel = false;
     this.choiceFortravel = "";
 
     //Travel Claim validation for accident
     this.travelClaimForm = fb.group({
       Travel_Policy_Id: ['', [Validators.required, Validators.pattern("[0-9]*")]],
       Ticket_Copy: ['', Validators.required],
       Reason_for_Claim: ['', [Validators.required]],
       Mobile_Number: ['', [Validators.required, Validators.minLength(10), Validators.pattern("[0-9]*")]],
       Complaint_Copy: ['', Validators.required]
     });
 
     this.travelClaimFormForAccident = fb.group({​​
 
       Travel_Policy_Id: ['', [Validators.required, Validators.pattern("[0-9]*")]],
 
       Ticket_Copy: ['', Validators.required],
 
       Reason_for_Claim: ['', [Validators.required]],
 
       Mobile_Number: ['', [Validators.required, Validators.minLength(10), Validators.pattern("[0-9]*")]],
 
      
 
     }​​);
 
   }
   getToday():string{
     let date=new Date();
     return formatDate(date, 'yyyy-MM-dd', 'en');
   }
  
   ngOnInit(): void {
 
 
   }
   //Motor Claim
   get f() {
     return this.motorClaimForm.controls;
 
   }
   get ft() {
     return this.motorClaimFormForTheft.controls;
   }
   selectChange() {
     this.theftBool = false;
     this.otherBool = false;
     if (this.choice == "selectoption") {
       this.theftBool = false;
       this.otherBool = false;
     }
     if (this.choice == " ")
       this.theftBool = true;
     else
       this.otherBool = true;
   }
   addClaim(Policy_Id:any,Name:any,Mobile_Number:any,Reason:any,Date_Of_Applying:any,Estimated_Amount_For_Repair:any,
     License_Copy:any,RC_Copy:any,Insurance_Copy:any,Bill_Copy:any) {
     this.claimService.addMotorClaim(Policy_Id.value,Name.value,Mobile_Number.value,Reason.value,Date_Of_Applying.value,
       Estimated_Amount_For_Repair.value,this.licenceUpload,this.rcUpload,this.insuranceUpload,this.billUpload).subscribe(data => console.log(data))
     alert("Claim Accepted");
     console.log(this.motorClaimForm.value);
     this.motorClaimForm.reset();
     this.router.navigateByUrl('/home');
   }
   addClaimForTheft(Policy_Id:any,Name:any,Mobile_Number:any,Reason:any,Date_Of_Applying:any,
     License_Copy:any,RC_Copy:any,Insurance_Copy:any,Authenticated_Letter_from_RTO:any) {
     this.claimService.addMotorClaimTheft(Policy_Id.value,Name.value,Mobile_Number.value,Reason.value,Date_Of_Applying.value,
       this.licenceUpload,this.rcUpload,this.insuranceUpload,this.rtoUpload).subscribe(data => console.log(data))
     alert("Claim Accepted");
     console.log(this.motorClaimFormForTheft.value);
     this.motorClaimFormForTheft.reset();
     this.router.navigateByUrl('/home');
   }
   onSelectLicence(event:any)
   {
       this.licenceUpload = event.target.files[0];
       var reader = new FileReader();
       reader.readAsDataURL(this.licenceUpload);
   }
   onSelectRc(event:any)
   {
       this.rcUpload = event.target.files[0];
       var reader = new FileReader();
       reader.readAsDataURL(this.rcUpload);
   }
   onSelectInsurance(event:any)
   {
       this.insuranceUpload = event.target.files[0];
       var reader = new FileReader();
       reader.readAsDataURL(this.insuranceUpload);
   }
   onSelectBill(event:any)
   {
       this.billUpload = event.target.files[0];
       var reader = new FileReader();
       reader.readAsDataURL(this.billUpload);
   }
   onSelectRto(event:any)
   {
     this.rtoUpload = event.target.files[0];
       var reader = new FileReader();
       reader.readAsDataURL(this.rtoUpload);
 
   }
 
   //Travel Claim
   selectChangeTravel() {
     this.theftBoolForTravel = false;
     this.otherBoolForTravel = false;
 
     if (this.choiceFortravel == "theftofbaggage")
       this.theftBoolForTravel = true;
     else
       this.otherBoolForTravel = true;
   }
   get g() {
     return this.travelClaimForm?.controls;
   }
  //  addTravelClaim(Travel_Policy_Id: any,
  //    Ticket_Copy: any,
  //    Reason_for_Claim: any,
  //    Mobile_Number: any,
  //    Complaint_Copy: any) {
  //    this.claimService.addTravelClaim(Travel_Policy_Id.value, this.fileToUpload, Reason_for_Claim.value,
  //      Mobile_Number.value, this.fileToUpload2).subscribe(data => console.log(data))
  //    alert("Claim Accepted");
  //    console.log(this.travelClaimForm.value);
  //    this.travelClaimForm.reset();
  //    this.router.navigateByUrl('/home');
  //  }
   onSelectFile(event: any) {
     this.fileToUpload = event.target.files[0];
     var reader = new FileReader();
     reader.readAsDataURL(this.fileToUpload);
   }
   onSelectFile2(event: any) {
     this.fileToUpload2 = event.target.files[0];
     var reader = new FileReader();
     reader.readAsDataURL(this.fileToUpload2);
   }
  //  addTravelClaimAccident(Travel_Policy_Id: any,
  //    Ticket_Copy: any,
  //    Reason_for_Claim: any,
  //    Mobile_Number: any,
  //  ) {
  //    this.claimService.addTravelClaimAccident(Travel_Policy_Id.value, this.fileToUpload, Reason_for_Claim.value,
  //      Mobile_Number.value).subscribe(data => console.log(data))
  //    alert("Claim Accepted");
  //    console.log(this.travelClaimForm.value);
 
  //    this.travelClaimFormForAccident.reset();
  //    this.router.navigateByUrl('/home');
  //  }
 
 }


