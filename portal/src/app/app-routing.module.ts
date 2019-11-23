import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { CarousalOneLayoutsComponent } from './carousal-one-layouts/carousal-one-layouts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent
  },
  {
      path: 'carousal-one',
      component: CarousalOneLayoutsComponent
   },
   {
      path: 'login',
      component: LoginComponent
   },
   {
      path: 'register',
      component: RegisterComponent
   },
   {
      path: 'verify',
      component: VerifyComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
