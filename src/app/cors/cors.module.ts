import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AuthUserComponent } from './auth-user/auth-user.component';



@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    AuthUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ]
})
export class CorsModule { }
