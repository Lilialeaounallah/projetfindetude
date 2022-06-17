import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetRoutingModule } from './projet-routing.module';
import { ProjetComponent } from './projet.component';
import { AddProjetComponent } from './add-projet/add-projet.component';


@NgModule({
  declarations: [
    ProjetComponent,
    AddProjetComponent
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule
  ]
})
export class ProjetModule { }
