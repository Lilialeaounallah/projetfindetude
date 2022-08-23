import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateBesoinComponent } from './update-besoin.component';

const routes: Routes = [
  {path:'',component:UpdateBesoinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateBesoinRoutingModule { }
