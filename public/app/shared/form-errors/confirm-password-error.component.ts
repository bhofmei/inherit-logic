import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'confirm-password-error',
    templateUrl: './confirm-password-error.template.html'
})

export class ConfirmPasswordErrorComponent {
  @Input() confirmPassword: AbstractControl;
}
