import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionnementComponent } from './positionnement.component';

const routes: Routes = [
  {path:'',component:PositionnementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionnementRoutingModule { }
