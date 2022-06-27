import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocieteRoutingModule } from './societe-routing.module';
import { SocieteComponent } from './societe.component';
import { AddSocieteComponent } from './add-societe/add-societe.component';
import { UpdateSocieteComponent } from './update-societe/update-societe.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{SocieteService} from '../services/societe.service';


@NgModule({
  declarations: [
    SocieteComponent,
    AddSocieteComponent,
    UpdateSocieteComponent
  ],
  imports: [
    CommonModule,
    SocieteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [SocieteService]

})
export class SocieteModule { }
