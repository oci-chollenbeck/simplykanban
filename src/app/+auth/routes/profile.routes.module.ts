import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GUARD_PIPES } from '../guards/guard-pipes.const';
import { AUTH_ROUTE_NAMES } from './auth.routes.names';

// *: Components
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { ProfileComponent } from '../+profile/profile.component';
/*COMPONENT_IMPORT*/

// *: Routes
export const routes: Routes = [
  { path: AUTH_ROUTE_NAMES.PROFILE, component: ProfileComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: (GUARD_PIPES.redirectUnauthorizedToLogin) } },
  /*COMPONENT_ROUTE*/
];

// *: Module
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class ProfileRoutingModule { }
