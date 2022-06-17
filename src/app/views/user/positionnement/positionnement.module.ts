import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionnementRoutingModule } from './positionnement-routing.module';
import { PositionnementComponent } from './positionnement.component';
import { AddPositionnementComponent } from './add-positionnement/add-positionnement.component';


@NgModule({
  declarations: [
    PositionnementComponent,
    AddPositionnementComponent
  ],
  imports: [
    CommonModule,
    PositionnementRoutingModule
  ]
})
export class PositionnementModule { }
