import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

/**
 * Handle email related error messages such as
 * - is required: `Email is required`
 */
@Component({
    selector: 'email-error',
    templateUrl: './email-error.template.html'
})

export class EmailErrorComponent {
  /**
   * The input email from form; includes errors if applicable
   */
  @Input() email: AbstractControl;
}
