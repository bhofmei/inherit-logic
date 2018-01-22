import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthenticationRoutes } from './authentication.routes';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignoutComponent } from './signout/signout.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(AuthenticationRoutes)
    ],
    declarations: [
        AuthenticationComponent,
        SigninComponent,
        SignupComponent,
      SignoutComponent
    ]
})
export class AuthenticationModule { }
