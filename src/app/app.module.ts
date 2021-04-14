import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from'@angular/common/http';
import { BuyInsuranceComponent } from './Components/buy-insurance/buy-insurance.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FaqComponent } from './Components/faq/faq.component';
//<<<<<<< HEAD
import { ClaiminsuranceComponent } from './Components/claiminsurance/claiminsurance.component';

//=======
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//>>>>>>> fa3d85d5d5f74b70ccbce070f1ed791511d301a0


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterComponent,
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaqComponent,
    BuyInsuranceComponent,
    FaqComponent,
    ClaiminsuranceComponent,
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }