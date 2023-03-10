import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { Error404Component } from './common/error404/error404.component';
import { LearningComponent } from './components/learning/learning.component';
import { LearningCenterComponent } from './components/learning-center/learning-center.component';
import { JobOfferComponent } from './components/job-offer/job-offer.component';
import { HomeComponent } from './components/home/home.component';
import { DisplaySubComponent } from './common/display-sub/display-sub.component';
import { JobOffertCardComponent } from './common/job-offert-card/job-offert-card.component';
import { SearchFormComponent } from './common/search-form/search-form.component';
import { JobOffertDetailsComponent } from './common/job-offert-details/job-offert-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    LearningComponent,
    LearningCenterComponent,
    JobOfferComponent,
    HomeComponent,
    DisplaySubComponent,
    JobOffertCardComponent,
    SearchFormComponent,
    JobOffertDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
