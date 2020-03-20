import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// **************************************************
// Components & Services
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalComponent } from './+modal/modal.component';
import { TosComponent } from './+tos/tos.component';


@NgModule({
  declarations: [SpinnerComponent, ModalComponent, TosComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    SpinnerComponent,
    CommonModule
  ]
})
export class SharedModule { }
