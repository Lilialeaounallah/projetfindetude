import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BesoinRoutingModule } from './besoin-routing.module';
import { BesoinComponent } from './besoin.component';
import { FormsModule } from '@angular/forms';
import { AddBesoinComponent } from './add-besoin/add-besoin.component';


@NgModule({
  declarations: [
    BesoinComponent,
    AddBesoinComponent
  ],
  imports: [
    CommonModule,
    BesoinRoutingModule,
    FormsModule
  ]
})
export class BesoinModule { }
