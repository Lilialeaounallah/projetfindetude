import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RessourceRoutingModule } from './ressource-routing.module';
import { RessourceComponent } from './ressource.component';
import { AddRessourceComponent } from './add-ressource/add-ressource.component';


@NgModule({
  declarations: [
    RessourceComponent,
    AddRessourceComponent
  ],
  imports: [
    CommonModule,
    RessourceRoutingModule
  ]
})
export class RessourceModule { }
