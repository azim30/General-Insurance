import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomePageComponent} from './Components/home-page/home-page.component';
import{RegisterComponent} from './Components/register/register.component';
import { LoginComponent} from './Components/login/login.component';
import{AboutUsComponent} from './Components/about-us/about-us.component';
import{ContactUsComponent} from './Components/contact-us/contact-us.component';
import { ClaiminsuranceComponent } from './Components/claiminsurance/claiminsurance.component';

const routes: Routes = [
 // {path:'',component:HomePageComponent,pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path : 'home-page', component:HomePageComponent},
  {path : 'login', component:LoginComponent},
  {path : 'About-us', component:AboutUsComponent},
  {path: 'Contact', component:ContactUsComponent},
  {path:'claiminsurance',component:ClaiminsuranceComponent}
 
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }