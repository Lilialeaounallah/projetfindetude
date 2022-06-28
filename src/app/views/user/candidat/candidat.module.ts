import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatRoutingModule } from './candidat-routing.module';
import { CandidatComponent } from './candidat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { UpdateCandidatComponent } from './update-candidat/update-candidat.component';
import { CandidatService } from '../services/candidat.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CandidatComponent,
    AddCandidatComponent,
    UpdateCandidatComponent
  ],
  imports: [
    CommonModule,
    CandidatRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CandidatService]
})
export class CandidatModule { }
