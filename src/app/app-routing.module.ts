import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomePageComponent} from './Components/home-page/home-page.component';
import{RegisterComponent} from './Components/register/register.component';
import { LoginComponent} from './Components/login/login.component';
import{AboutUsComponent} from './Components/about-us/about-us.component';
import{ContactUsComponent} from './Components/contact-us/contact-us.component';
import{ForgetPasswordComponent} from './Components/forget-password/forget-password.component';
import{FooterComponent} from './Components/footer/footer.component';
import{HelpComponent} from './Components/help/help.component';
import {BackgroundComponent} from './Components/background/background.component';
import {AdminLoginComponent} from './Components/admin-login/admin-login.component';
import {AdminDashboardComponent} from './Components/admin-dashboard/admin-dashboard.component';
import {RegisterVehicleComponent} from './Components/register-vehicle/register-vehicle.component';
import {UserDashboardComponent} from './Components/user-dashboard/user-dashboard.component';
import {PolicyComponent} from './Components/policy/policy.component';
import {ClaiminsuranceComponent} from './Components/claiminsurance/claiminsurance.component';
import {TravelclaimComponent} from './Components/travelclaim/travelclaim.component';
import {TravelInsuranceComponent} from './Components/travel-insurance/travel-insurance.component';
import {CalculateInsuranceComponent} from './Components/calculate-insurance/calculate-insurance.component'; 
import {FaqComponent } from './Components/faq/faq.component';
const routes: Routes = [
 // {path:'',component:HomePageComponent,pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path : 'home-page', component:HomePageComponent},
  {path : 'login', component:LoginComponent},
  {path : 'About-us', component:AboutUsComponent},
  {path: 'Contact-us', component:ContactUsComponent},
  {path: 'forget-password' , component:ForgetPasswordComponent},
  {path:'footer',component:FooterComponent},
  {path:'help',component:HelpComponent},
  {path:'background',component:BackgroundComponent},
{path: 'admin-login', component:AdminLoginComponent},
  {path: 'admin-dashboard', component:AdminDashboardComponent},
  {path: 'RegisterVehicle', component:RegisterVehicleComponent},
  {path: 'user-dashboard', component: UserDashboardComponent},
  {path: 'policy', component: PolicyComponent},
  {path: 'claim-insurance', component: ClaiminsuranceComponent},
  {path: 'travelclaim', component: TravelclaimComponent},
  {path: 'travelinsurance', component: TravelInsuranceComponent},
  {path: 'calculate', component:CalculateInsuranceComponent},
  {path: 'faq',component:FaqComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }