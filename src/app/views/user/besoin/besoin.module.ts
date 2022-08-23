import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BesoinRoutingModule } from './besoin-routing.module';
import { BesoinComponent } from './besoin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBesoinComponent } from './add-besoin/add-besoin.component';
import { BesoinService } from '../services/besoin.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateBesoinComponent } from './update-besoin/update-besoin.component';


@NgModule({
  declarations: [
    BesoinComponent,
    AddBesoinComponent,
    UpdateBesoinComponent
  ],
  imports: [
    CommonModule,
    BesoinRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [BesoinService]
})
export class BesoinModule { }
