import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

/**
 * This is a confirmation dialog when user wants to delete
 * something sensitive, i.e. another user
 */
@Component({
  selector: 'confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.template.html'
})

export class ConfirmDeleteDialogComponent{

  /**
   * Message to be displayed in the dialog window
   */
  @Input() message: string = 'Are you sure you want to delete?'

  constructor(public activeModal: NgbActiveModal){

  }
}
