import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RessourceComponent } from '../ressource.component';
import { AddRessourceComponent } from './add-ressource.component';

const routes: Routes = [
  {path:'',component:AddRessourceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRessourceRoutingModule { }
