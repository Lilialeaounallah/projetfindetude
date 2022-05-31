import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCandidatComponent } from './update-candidat.component';

const routes: Routes = [
  {path:'',component:UpdateCandidatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCandidatRoutingModule { }
