import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionnementRoutingModule } from './positionnement-routing.module';
import { PositionnementComponent } from './positionnement.component';


@NgModule({
  declarations: [
    PositionnementComponent
  ],
  imports: [
    CommonModule,
    PositionnementRoutingModule
  ]
})
export class PositionnementModule { }
