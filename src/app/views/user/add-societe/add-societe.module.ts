import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSocieteRoutingModule } from './add-societe-routing.module';
import { AddSocieteComponent } from './add-societe.component';


@NgModule({
  declarations: [
    AddSocieteComponent
  ],
  imports: [
    CommonModule,
    AddSocieteRoutingModule
  ]
})
export class AddSocieteModule { }
