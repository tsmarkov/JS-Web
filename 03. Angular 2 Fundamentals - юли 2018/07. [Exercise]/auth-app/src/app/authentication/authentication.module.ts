import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService],
  declarations: [LoginComponent, RegisterComponent, LogoutComponent],
  exports: [LoginComponent, RegisterComponent, LogoutComponent]
})
export class AuthenticationModule { }
