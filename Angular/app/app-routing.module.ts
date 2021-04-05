import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './component/register/register.component'
import {DashboardComponent} from './component/dashboard/dashboard.component'
const routes: Routes = [
  {path: 'register' , component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
