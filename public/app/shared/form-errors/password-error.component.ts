import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'password-error',
    templateUrl: './password-error.template.html'
})

export class PasswordErrorComponent {
  @Input() password: AbstractControl;
}
