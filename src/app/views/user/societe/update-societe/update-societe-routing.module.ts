import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateSocieteComponent } from './update-societe.component';

const routes: Routes = [
  {path:'',component:UpdateSocieteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateSocieteRoutingModule { }
