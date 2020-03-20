import { Component, Input, HostBinding } from '@angular/core';
import { AppService } from '@app/app.service';
import { LayoutService } from '../layout.service';
import { AuthService } from '@app/+auth/services/auth.service';
import { APP_ROUTE_NAMES } from '@app/app.routes.names';
import { AUTH_ROUTE_NAMES } from '@app/+auth/routes/auth.routes.names';

@Component({
  selector: 'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',
  styles: [':host { display: block; }']
})
export class LayoutNavbarComponent {
  isExpanded = false;
  isRTL: boolean;

  accountRoute: string[];

  @Input() sidenavToggle = true;

  @HostBinding('class.layout-navbar') hostClassMain = true;

  constructor(private appService: AppService, private layoutService: LayoutService, private authService: AuthService) {
    this.isRTL = appService.isRTL;

    this.authService.authStatus.subscribe(
      (authState) => {
        this.accountRoute = authState ? ['/', APP_ROUTE_NAMES.ACCOUNT] : ['/', APP_ROUTE_NAMES.AUTH, AUTH_ROUTE_NAMES.LOGIN];
      },
      (err) => {
        this.accountRoute = ['/', APP_ROUTE_NAMES.AUTH, AUTH_ROUTE_NAMES.LOGIN];
        console.log(err);
      }
    );
  }

  currentBg() {
    return `bg-${this.appService.layoutNavbarBg}`;
  }

  toggleSidenav() {
    this.layoutService.toggleCollapsed();
  }
}
