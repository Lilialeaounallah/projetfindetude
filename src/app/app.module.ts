import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorsModule } from './cors/cors.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CorsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
