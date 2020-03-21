import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanLoad {

  // eslint-disable-next-line no-empty-function
  constructor(private authService: AuthService, private router: Router) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const user = this.authService.getCurrentUser();
    const permissionCheck = route.data.checkPermissions(user);

    // Always allow identity routes to resolve
    if (route.path.indexOf('identity') > -1) {
      return true;
    }


    // No user and permission check failed
    if (!user && !permissionCheck) {
      this.router.navigate(['/auth', 'logout']);
      return of(false);
    }

    // User, but failed permission check
    if (user && !permissionCheck) {
      return of(false);
    }

    return true;
  }
}
