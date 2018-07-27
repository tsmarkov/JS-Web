import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { NgModule } from '../../../node_modules/@angular/core';
import { NotFoundComponent } from '../not-found/not-found.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { UserComponent } from '../user/user.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'change-password', component: ChangePasswordComponent },
    {
        path: 'user', component: UserComponent, pathMatch: 'full',
        // children: [
        //     { path: 'login', component: UserLoginComponent },
        //     { path: 'register', component: UserRegisterComponent }
        // ]
    },
    { path: 'user/login', component: UserLoginComponent },
    { path: 'user/register', component: UserRegisterComponent },
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {
    constructor() { }
}