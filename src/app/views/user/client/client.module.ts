import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { DetailsClientComponent } from './details-client/details-client.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientComponent,
    AddClientComponent,
    UpdateClientComponent,
    DetailsClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientModule { }
