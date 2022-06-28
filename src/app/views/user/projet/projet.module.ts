import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetRoutingModule } from './projet-routing.module';
import { ProjetComponent } from './projet.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { ProjetService } from '../services/projet.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProjetComponent,
    AddProjetComponent
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ProjetService]
})
export class ProjetModule { }
