import { Component, Input, AfterViewInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '@app/app.service';
import { LayoutService } from '../layout.service';
import { APP_MENU } from '@app/app.menu';
import { AuthService } from '@app/+auth/services/auth.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-layout-sidenav',
  templateUrl: './layout-sidenav.component.html',
  styles: [':host { display: block; }']
})
export class LayoutSidenavComponent implements AfterViewInit {
  @Input() orientation = 'vertical';

  @HostBinding('class.layout-sidenav') hostClassVertical = false;
  @HostBinding('class.layout-sidenav-horizontal') hostClassHorizontal = false;
  @HostBinding('class.flex-grow-0') hostClassFlex = false;

  menu: any[];

  constructor(private router: Router, private appService: AppService, private layoutService: LayoutService, private authService: AuthService) {
    // Set host classes
    this.hostClassVertical = this.orientation !== 'horizontal';
    this.hostClassHorizontal = !this.hostClassVertical;
    this.hostClassFlex = this.hostClassHorizontal;

    this.menu = [];

    this.authService.getUserClaims().subscribe(
      tokenResult => {
        // User Found
        _.each(APP_MENU, (item) => {
          let valid = true;

          _.each(item.claims, (c) => {
            if (valid) {
              valid = !!tokenResult.claims[c];
            }
          });

          return valid;
        });
      },
      () => {
        // No user
        this.menu = _.filter(APP_MENU, (i) => { return !i.claims; });
      }
    );


  }

  ngAfterViewInit() {
    // Safari bugfix
    this.layoutService._redrawLayoutSidenav();
  }

  getClasses() {
    let bg = this.appService.layoutSidenavBg;

    if (this.orientation === 'horizontal' && (bg.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
      bg = bg
        .replace(' sidenav-dark', '')
        .replace(' sidenav-light', '')
        .replace('-darker', '')
        .replace('-dark', '');
    }

    return `${this.orientation === 'horizontal' ? 'container-p-x ' : ''} bg-${bg}`;
  }

  isActive(url) {
    return this.router.isActive(url, true);
  }

  isMenuActive(url) {
    return this.router.isActive(url, false);
  }

  isMenuOpen(url) {
    return this.router.isActive(url, false) && this.orientation !== 'horizontal';
  }

  toggleSidenav() {
    this.layoutService.toggleCollapsed();
  }
}
