import { Injectable } from '@angular/core';
import { SpinnerComponent } from './spinner.component';

@Injectable({ providedIn: 'root' })
export class SpinnerService {

  private spinnerCache = new Set<SpinnerComponent>();

  _register(spinner: SpinnerComponent): void {
    this.spinnerCache.add(spinner);
  }

  _unregister(spinnerToRemove: SpinnerComponent): void {
    this.spinnerCache.forEach(spinner => {
      if (spinner === spinnerToRemove) {
        this.spinnerCache.delete(spinner);
      }
    });
  }

  show(spinnerId: string): void {
    this.spinnerCache.forEach(spinner => {
      if (spinner.id === spinnerId) {
        spinner.show = true;
      }
    });
  }

  hide(spinnerId: string): void {
    this.spinnerCache.forEach(spinner => {
      if (spinner.id === spinnerId) {
        spinner.show = false;
      }
    });
  }

  showGroup(spinnerGroup?: string): void {
    if (!spinnerGroup) { spinnerGroup = 'default'; }
    this.spinnerCache.forEach(spinner => {
      if (spinner.group === spinnerGroup) {
        spinner.show = true;
      }
    });
  }

  hideGroup(spinnerGroup?: string): void {
    if (!spinnerGroup) { spinnerGroup = 'default' };
    this.spinnerCache.forEach(spinner => {
      if (spinner.group === spinnerGroup) {
        spinner.show = false;
      }
    });
  }

  showAll(): void {
    this.spinnerCache.forEach(spinner => spinner.show = true);
  }

  hideAll(): void {
    this.spinnerCache.forEach(spinner => spinner.show = false);
  }

  isShowing(spinnerId: string): boolean | undefined {
    let showing;
    this.spinnerCache.forEach(spinner => {
      if (spinner.id === spinnerId) {
        showing = spinner.show;
      }
    });
    return showing;
  }
}
