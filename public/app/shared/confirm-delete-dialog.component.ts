import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.template.html'
})

export class ConfirmDeleteDialogComponent{

  @Input() message: string = 'Are you sure you want to delete?'

  constructor(public activeModal: NgbActiveModal){

  }
}
