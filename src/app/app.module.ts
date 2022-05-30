import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorsModule } from './cors/cors.module';
import { LoginComponent } from './views/user/login/login.component';
import { AddCandidatComponent } from './views/user/add-candidat/add-candidat.component';
import { DetailsCandidatComponent } from './views/user/details-candidat/details-candidat.component';
import { UpdateCandidatComponent } from './views/user/update-candidat/update-candidat.component';
import { DeleteCandidatComponent } from './views/user/delete-candidat/delete-candidat.component';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsCandidatComponent,
    UpdateCandidatComponent,
    DeleteCandidatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CorsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
