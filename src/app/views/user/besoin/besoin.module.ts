import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BesoinRoutingModule } from './besoin-routing.module';
import { BesoinComponent } from './besoin.component';


@NgModule({
  declarations: [
    BesoinComponent
  ],
  imports: [
    CommonModule,
    BesoinRoutingModule
  ]
})
export class BesoinModule { }
