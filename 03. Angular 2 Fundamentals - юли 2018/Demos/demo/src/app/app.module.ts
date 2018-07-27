import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AppRouterModule } from './routes/app.router.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserComponent } from './user/user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    NotFoundComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
