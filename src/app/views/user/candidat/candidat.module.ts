import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatRoutingModule } from './candidat-routing.module';
import { CandidatComponent } from './candidat.component';
import { FormsModule } from '@angular/forms';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { UpdateCandidatComponent } from './update-candidat/update-candidat.component';
import { DetailsCandidatComponent } from './details-candidat/details-candidat.component';


@NgModule({
  declarations: [
    CandidatComponent,
    AddCandidatComponent,
    UpdateCandidatComponent,
    DetailsCandidatComponent
  ],
  imports: [
    CommonModule,
    CandidatRoutingModule,
    FormsModule
  ]
})
export class CandidatModule { }
