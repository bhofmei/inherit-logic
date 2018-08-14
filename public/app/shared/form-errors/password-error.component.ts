import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'password-error',
//  template: `
//<div *ngIf="email.invalid &&(email.touched || email.dirty)" class="form-error text-muted">
//  <div *ngIf="email.errors.required">Email is required.</div>
//  <div *ngIf="!email.errors.required && email.errors.email">Email is invalid.</div>
//</div>`
    templateUrl: './password-error.template.html',
  styleUrls: ['./form-errors.styles.css']
})

export class PasswordErrorComponent {
  @Input() password: AbstractControl;
}
