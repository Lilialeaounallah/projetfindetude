import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCandidatRoutingModule } from './add-candidat-routing.module';
import { FormsModule } from '@angular/forms';
import { AddCandidatComponent } from './add-candidat.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AddCandidatComponent
  ],
  imports: [
    CommonModule,
    AddCandidatRoutingModule,
    FormsModule,                            
  ]
})
export class AddCandidatModule { }
