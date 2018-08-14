import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

/**
 * Handle email related error messages such as
 * - is required: `Email is required`
 */
@Component({
    selector: 'email-error',
//  template: `
//<div *ngIf="email.invalid &&(email.touched || email.dirty)" class="form-error text-muted">
//  <div *ngIf="email.errors.required">Email is required.</div>
//  <div *ngIf="!email.errors.required && email.errors.email">Email is invalid.</div>
//</div>`
    templateUrl: './email-error.template.html',
  styleUrls: ['./form-errors.styles.css']
})

export class EmailErrorComponent {
  /**
   * The input email from form; includes errors if applicable
   */
  @Input() email: AbstractControl;
}
