import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule}from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './Modules/material/material.module';
/*Components*/
import { BuyInsuranceComponent } from './Components/buy-insurance/buy-insurance.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FaqComponent } from './Components/faq/faq.component';
import { ClaiminsuranceComponent } from './Components/claiminsurance/claiminsurance.component';
import { HelpComponent } from './Components/help/help.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BackgroundComponent } from './Components/background/background.component';
import { CalculateInsuranceComponent } from './Components/calculate-insurance/calculate-insurance.component';




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
    HelpComponent,
    FooterComponent,
    BackgroundComponent,
    CalculateInsuranceComponent,
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }