import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './Components/home-page/home-page.component';
import {RegisterComponent} from './Components/register/register.component';
import {LoginComponent} from './Components/login/login.component';
import {AboutUsComponent} from './Components/about-us/about-us.component';
import {ContactUsComponent} from './Components/contact-us/contact-us.component';
import{BuyInsuranceComponent} from './Components/buy-insurance/buy-insurance.component';
import {ClaiminsuranceComponent } from './Components/claiminsurance/claiminsurance.component';
import{FaqComponent} from './Components/faq/faq.component';
import{FooterComponent} from './Components/footer/footer.component';
import{HelpComponent} from './Components/help/help.component';
import {BackgroundComponent} from './Components/background/background.component';
import {CalculateInsuranceComponent} from './Components/calculate-insurance/calculate-insurance.component';
const routes: Routes = [
 // {path:'',component:HomePageComponent,pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path : 'home-page', component:HomePageComponent},
  {path : 'login', component:LoginComponent},
  {path : 'about-us', component:AboutUsComponent},
  {path: 'contact-us', component:ContactUsComponent},
  {path:'claim-insurance',component:ClaiminsuranceComponent},
  {path:'faq',component:FaqComponent},
  {path:'footer',component:FooterComponent},
  {path:'help',component:HelpComponent},
  {path:'background',component:BackgroundComponent},
  {path:'buy-insurance',component:BuyInsuranceComponent},
  {path:'calculate-insurance',component:CalculateInsuranceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }