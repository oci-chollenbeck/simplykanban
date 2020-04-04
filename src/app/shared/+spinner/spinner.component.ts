import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent implements OnInit, OnDestroy {

  // private validSpinnerTypes: Array<string>;
  // private validTextTypes: Array<string>;
  private isShowing = false;

  @Input() spinnerType: string;
  @Input() textType: string;
  @Input() id: string;
  @Input() group: string;
  @Input()
  get show(): boolean {
    return this.isShowing;
  }

  @Output() showChange = new EventEmitter();
  set show(val: boolean) {
    this.isShowing = val;
    this.showChange.emit(this.isShowing);
  }

  constructor(private spinnerService: SpinnerService) {
    this.show = false;
  }

  ngOnInit() {
    if (!this.id) { throw new Error('Spinner must have an ID.'); }


    // Default values
    if (!this.group) { this.group = 'default'; }
    if (!this.spinnerType) { this.spinnerType = 'grow'; }
    if (!this.textType) { this.textType = 'primary'; }
    if (typeof this.show == undefined) { this.show = true; }

    // Register spinner with service
    this.spinnerService._register(this);
  }

  ngOnDestroy() {
    this.spinnerService._unregister(this);
  }

}
