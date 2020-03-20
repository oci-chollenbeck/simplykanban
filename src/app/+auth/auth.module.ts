// *: DO NOT REMOVE THE //{} COMMENTS.  `
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { AUTH_ROUTE_NAMES } from './routes/auth.routes.names';

// *: Components
import { LoginComponent } from './+login/login.component';
import { LogoutComponent } from './+logout/logout.component';
import { ActionComponent } from './+action/action.component';
import { RegisterComponent } from './+register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { ResetPasswordComponent } from './+reset-password/reset-password.component';
import { PasswordStrengthBarModule } from 'assets/libs/ng2-password-strength-bar/ng2-password-strength-bar.module';
//{COMPONENT_IMPORT}

// *: Routes
export const routes: Routes = [
  { path: AUTH_ROUTE_NAMES.LOGIN, component: LoginComponent },
  { path: AUTH_ROUTE_NAMES.LOGOUT, component: LogoutComponent },
  { path: AUTH_ROUTE_NAMES.ACTION, component: ActionComponent },
  { path: AUTH_ROUTE_NAMES.REGISTER, component: RegisterComponent },
  { path: AUTH_ROUTE_NAMES.RESETPASSWORD, component: ResetPasswordComponent },
  //{COMPONENT_ROUTE}
];

// *: Module
@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    ActionComponent,
    RegisterComponent,
    ResetPasswordComponent
    //{COMPONENT_DECLARATION}
  ],
  imports: [
    SharedModule,
    PasswordStrengthBarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

  ],
  exports: [
    RouterModule,
    //{MODULE_EXPORT}
  ]
})
export class AuthModule { }
