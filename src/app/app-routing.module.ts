import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './common/error404/error404.component';
import { JobOfferComponent } from './components/job-offer/job-offer.component';
import { HomeComponent } from './components/home/home.component';
import { LearningCenterComponent } from './components/learning-center/learning-center.component';
import { LearningComponent } from './components/learning/learning.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},

  { path: 'formations', component: LearningComponent},
  { path: 'centres-de-formation', component: LearningCenterComponent},
  { path: 'trouver-un-emploi', component: JobOfferComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: Error404Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
