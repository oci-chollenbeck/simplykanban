import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';

@Injectable()
export class AppService {
  constructor(private titleService: Title) { }

  // Set page title
  set pageTitle(value: string) {
    this.titleService.setTitle(`${value} - Angular Starter`);
  }

  // Check for RTL layout
  get isRTL() {
    return document.documentElement.getAttribute('dir') === 'rtl' ||
      document.body.getAttribute('dir') === 'rtl';
  }

  // Check if IE10
  get isIE10() {
    return typeof document['documentMode'] === 'number' && document['documentMode'] === 10;
  }

  // Layout navbar color
  get layoutNavbarBg() {
    return 'navbar-theme';
  }

  // Layout sidenav color
  get layoutSidenavBg() {
    return 'sidenav-theme';
  }

  // Layout footer color
  get layoutFooterBg() {
    return 'footer-theme';
  }

  // Animate scrollTop
  scrollTop(to: number, duration: number, element = document.scrollingElement || document.documentElement) {
    if (element.scrollTop === to) { return; }
    const start = element.scrollTop;
    const change = to - start;
    const startDate = +new Date();

    // t = current time; b = start value; c = change in value; d = duration
    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) { return c / 2 * t * t + b; }
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animateScroll = () => {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration), 10);
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollTop = to;
      }
    };

    animateScroll();
  }
  // Build a form group from any object w/ optional default value
  buildFormGroup(object: any, patchVal?: any): FormGroup {
    const controls = {};

    for (const key of Object.keys(object)) {
      if (Array.isArray(object[key])) {
        controls[key] = new FormArray([]);
      } else {
        controls[key] = new FormControl(null, null);
      }
    }

    const group = new FormGroup(controls);
    group.patchValue(patchVal || object);

    return group;
  }

  // Convert Moment to NgbDateStruct
  convertDateToNgbDate(d: moment.Moment): NgbDateStruct {
    if (!d) { return null; }

    return {
      year: d.get('year'),
      month: d.get('month') + 1,
      day: d.get('date')
    };
  }

  // Convert MOment to NgbTimeStruct
  convertTimeToNgbTime(d: moment.Moment): NgbTimeStruct {
    if (!d) { return null; }

    return {
      hour: d.get('hour'),
      minute: d.get('minute'),
      second: d.get('second')
    };
  }

  // Convert NgbDateStructo to Date String
  convertNgbDateToIsoDate(d: NgbDateStruct, partial = true) {
    if (!d) { return null; }

    const date = new Date(d.year, d.month - 1, d.day);
    return (partial) ? date.toISOString().split('T')[0] : date.toISOString();
  }

  // Convert NgbTime to Time Strength
  convertNgbTimeToIsoTime(d: NgbTimeStruct) {
    if (!d) { return '00:00:00'; }

    const hour = d.hour < 10 ? '0' + d.hour : d.hour;
    const min = d.minute < 10 ? '0' + d.minute : d.minute;
    const sec = d.second < 10 ? '0' + d.second : d.second;
    return hour + ':' + min + ':' + sec;
  }

  // Convert timestamp to NgbDateTime
  convertIsoDateToNgbDateTime(timestamp: string) {
    const d = moment(timestamp);

    if (d.isValid()) {
      const date = this.convertDateToNgbDate(d);
      const time = this.convertTimeToNgbTime(d);

      return {
        date,
        time
      }
    } else {
      return { date: null, time: null };
    }
  }

  // Format a moment into a url friendly timestamp
  convertMomentToUrlTimestamp(m: moment.Moment): string {
    return m.format('YYYY-MM-DDTHH-mm-ss');
  }
}
