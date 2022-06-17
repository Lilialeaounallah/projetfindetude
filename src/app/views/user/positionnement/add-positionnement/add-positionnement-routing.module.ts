import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPositionnementComponent } from './add-positionnement.component';

const routes: Routes = [
  {path:'',component:AddPositionnementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPositionnementRoutingModule { }
