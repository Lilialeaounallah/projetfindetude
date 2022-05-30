import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BesoinComponent } from './besoin.component';

const routes: Routes = [
  {path:'',component:BesoinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BesoinRoutingModule { }
