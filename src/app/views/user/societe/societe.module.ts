import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocieteRoutingModule } from './societe-routing.module';
import { SocieteComponent } from './societe.component';
import { AddSocieteComponent } from './add-societe/add-societe.component';
import { DetailsSocieteComponent } from './details-societe/details-societe.component';
import { UpdateSocieteComponent } from './update-societe/update-societe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SocieteComponent,
    AddSocieteComponent,
    DetailsSocieteComponent,
    UpdateSocieteComponent
  ],
  imports: [
    CommonModule,
    SocieteRoutingModule,
    FormsModule
  ]
})
export class SocieteModule { }
