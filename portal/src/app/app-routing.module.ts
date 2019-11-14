import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { CarousalOneLayoutsComponent } from './carousal-one-layouts/carousal-one-layouts.component';


const routes: Routes = [
  {
    path: '',
    component: NavigationComponent
  },
  {
      path: 'carousal-one',
      component: CarousalOneLayoutsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
