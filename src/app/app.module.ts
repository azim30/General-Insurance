import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from'@angular/common/http';
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
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { RegisterVehicleComponent } from './Components/register-vehicle/register-vehicle.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { PolicyComponent } from './Components/policy/policy.component';
import { ClaiminsuranceComponent } from './Components/claiminsurance/claiminsurance.component';
import { TravelInsuranceComponent } from './Components/travel-insurance/travel-insurance.component';
import { TravelclaimComponent } from './Components/travelclaim/travelclaim.component';
import { CalculateInsuranceComponent } from './Components/calculate-insurance/calculate-insurance.component';
import { TravelPaymentComponent } from './Components/travel-payment/travel-payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterComponent,
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaqComponent,
BackgroundComponent,
FooterComponent,
HelpComponent,
    FaqComponent,
    ForgetPasswordComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    RegisterVehicleComponent,
    UserDashboardComponent,
    PolicyComponent,
    ClaiminsuranceComponent,
    TravelInsuranceComponent,
    TravelclaimComponent,
    CalculateInsuranceComponent,
    TravelPaymentComponent,

    
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
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    NgxCaptchaModule,
    Ng2SearchPipeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }