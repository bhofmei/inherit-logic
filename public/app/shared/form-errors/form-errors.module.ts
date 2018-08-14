import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { EmailErrorComponent } from './email-error.component';
import { PasswordErrorComponent } from './password-error.component';
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
    EmailErrorComponent,
    PasswordErrorComponent
  ],
    exports: [
      EmailErrorComponent,
      PasswordErrorComponent
    ],
})
export class FormErrorsModule {
}
