import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GUARD_PIPES } from '../guards/guard-pipes.const';
import { AUTH_ROUTE_NAMES } from './auth.routes.names';

// *: Components
import { LoginComponent } from '../+login/login.component';
import { LogoutComponent } from '../+logout/logout.component';
import { ActionComponent } from '../+action/action.component';
import { RegisterComponent } from '../+register/register.component';
import { ResetPasswordComponent } from '../+reset-password/reset-password.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { ProfileComponent } from '../+profile/profile.component';
/*COMPONENT_IMPORT*/

// *: Routes
export const routes: Routes = [
  { path: AUTH_ROUTE_NAMES.LOGIN, component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: (GUARD_PIPES.redirectAuthorizedToHome) } },
  { path: AUTH_ROUTE_NAMES.LOGOUT, component: LogoutComponent },
  { path: AUTH_ROUTE_NAMES.ACTION, component: ActionComponent },
  { path: AUTH_ROUTE_NAMES.REGISTER, component: RegisterComponent },
  { path: AUTH_ROUTE_NAMES.RESETPASSWORD, component: ResetPasswordComponent },
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
export class AuthRoutingModule { }
