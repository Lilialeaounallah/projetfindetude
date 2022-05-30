import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocieteComponent } from './societe.component';

const routes: Routes = [
  {path:'',component:SocieteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocieteRoutingModule { }
