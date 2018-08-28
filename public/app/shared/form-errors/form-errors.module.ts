import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RequiredErrorComponent } from './required-error.component';
import { EmailErrorComponent } from './email-error.component';
import { PasswordErrorComponent } from './password-error.component';
import { ConfirmPasswordErrorComponent } from './confirm-password-error.component';
/**
 * The Form Errors Module contains templates for ReactiveForm
 * input errors that are needed across the application
 *
 * Saves time from having to create the same error messages across
 * numerous pages and keeps the error messages consistant
 */
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ],
  declarations: [
    RequiredErrorComponent,
    EmailErrorComponent,
    PasswordErrorComponent,
    ConfirmPasswordErrorComponent
  ],
    exports: [
      RequiredErrorComponent,
      EmailErrorComponent,
      PasswordErrorComponent,
      ConfirmPasswordErrorComponent
    ],
})
export class FormErrorsModule {
}
