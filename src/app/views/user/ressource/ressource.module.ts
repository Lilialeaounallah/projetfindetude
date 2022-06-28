import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RessourceRoutingModule } from './ressource-routing.module';
import { RessourceComponent } from './ressource.component';
import { AddRessourceComponent } from './add-ressource/add-ressource.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{RessourceService} from '../services/ressource.service';


@NgModule({
  declarations: [
    RessourceComponent,
    AddRessourceComponent
  ],
  imports: [
    CommonModule,
    RessourceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [RessourceService]
})
export class RessourceModule { }
