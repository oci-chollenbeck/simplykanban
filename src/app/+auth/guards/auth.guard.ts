import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AUTH_ROUTE_NAMES } from '../routes/auth.routes.names';
import { APP_ROUTE_NAMES } from '@app/app.routes.names';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanLoad {

  // eslint-disable-next-line no-empty-function
  constructor(private authService: AuthService, private router: Router) { }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    const user = this.authService.getCurrentUser();
    const permissionCheck = route.data.checkPermissions(user);

    // Always allow identity routes to resolve
    if (route.path.indexOf(APP_ROUTE_NAMES.AUTH) > -1) {
      return true;
    }


    // No user and permission check failed
    if (!user && !permissionCheck) {
      this.router.navigate(['/', APP_ROUTE_NAMES.AUTH, AUTH_ROUTE_NAMES.LOGIN]);
      return of(false);
    }

    // User, but failed permission check
    if (user && !permissionCheck) {
      return of(false);
    }

    return true;
  }
}
