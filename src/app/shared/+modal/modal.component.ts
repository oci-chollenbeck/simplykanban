/* eslint-disable no-empty-function */
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: []
})
export class ModalComponent implements OnInit {

  @Input() title = 'Information';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }

}
