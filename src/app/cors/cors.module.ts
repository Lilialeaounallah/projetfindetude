
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthUserComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ]
})
export class CorsModule { }
