import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'required-error',
    templateUrl: './required-error.template.html'
})

export class RequiredErrorComponent {
  @Input() field: AbstractControl;
  @Input() textLabel: string;
}
