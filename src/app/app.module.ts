import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { Error404Component } from './common/error404/error404.component';
import { LearningComponent } from './components/learning/learning.component';
import { LearningCenterComponent } from './components/learning-center/learning-center.component';
import { JobOfferComponent } from './components/job-offer/job-offer.component';
import { HomeComponent } from './components/home/home.component';
import { JobOffertCardComponent } from './common/job-offert-card/job-offert-card.component';
import { SearchFormComponent } from './common/search-form/search-form.component';
import { JobOffertDetailsComponent } from './common/job-offert-details/job-offert-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from 'src/auth/auth.module';
import { AuthRoutingModule } from 'src/auth/auth-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './components/profile/profile.component';
import { ButtonPrimaryComponent } from './common/button-primary/button-primary.component';
import { CardComponent } from './common/card/card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    LearningComponent,
    LearningCenterComponent,
    JobOfferComponent,
    HomeComponent,
    JobOffertCardComponent,
    SearchFormComponent,
    JobOffertDetailsComponent,
    ProfileComponent,
    ButtonPrimaryComponent,
    CardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    AuthRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
