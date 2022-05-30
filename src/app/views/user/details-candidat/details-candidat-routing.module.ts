import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCandidatComponent } from './details-candidat.component';
const routes: Routes = [
  {path:'',component:DetailsCandidatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsCandidatRoutingModule { }
