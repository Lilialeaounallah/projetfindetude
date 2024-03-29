import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionnementRoutingModule } from './positionnement-routing.module';
import { PositionnementComponent } from './positionnement.component';
import { AddPositionnementComponent } from './add-positionnement/add-positionnement.component';
import { PositionnementService } from '../services/positionnement.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePositionnementComponent } from './update-positionnement/update-positionnement.component';


@NgModule({
  declarations: [
    PositionnementComponent,
    AddPositionnementComponent,
    UpdatePositionnementComponent
  ],
  imports: [
    CommonModule,
    PositionnementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [PositionnementService]
})
export class PositionnementModule { }
