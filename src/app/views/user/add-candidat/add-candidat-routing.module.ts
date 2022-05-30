import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidatComponent } from './add-candidat.component';

const routes: Routes = [
  {path:'',component:AddCandidatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCandidatRoutingModule { }
