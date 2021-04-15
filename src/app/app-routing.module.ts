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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }