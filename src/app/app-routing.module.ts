import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionExpiredComponent } from './session-expired/session-expired.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sessionExpired',
    component: SessionExpiredComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
