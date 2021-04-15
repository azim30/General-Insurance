import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from'@angular/common/http';
import { BuyInsuranceComponent } from './Components/buy-insurance/buy-insurance.component';
import {BackgroundComponent} from './Components/background/background.component';
import {FooterComponent} from './Components/footer/footer.component';
import {HelpComponent} from './Components/help/help.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FaqComponent } from './Components/faq/faq.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { RegisterVehicleComponent } from './Components/register-vehicle/register-vehicle.component';


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
BackgroundComponent,
FooterComponent,
HelpComponent,
    FaqComponent,
    ForgetPasswordComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    RegisterVehicleComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxCaptchaModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }