import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthenticationRoutes } from './authentication.routes';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignoutComponent } from './signout/signout.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(AuthenticationRoutes)
    ],
    declarations: [
        SigninComponent,
        SignupComponent,
      SignoutComponent,
      ForgetPasswordComponent,
      ResetPasswordComponent
    ]
})
export class AuthenticationModule { }
