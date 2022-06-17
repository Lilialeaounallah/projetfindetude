import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBesoinComponent } from './add-besoin.component';

const routes: Routes = [
  {path:'',component:AddBesoinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBesoinRoutingModule { }
