// *: DO NOT REMOVE THE //{} COMMENTS.  `
import { NgModule } from '@angular/core';

// *: Components
import { LoginComponent } from './+login/login.component';
import { LogoutComponent } from './+logout/logout.component';
import { ActionComponent } from './+action/action.component';
import { RegisterComponent } from './+register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { ResetPasswordComponent } from './+reset-password/reset-password.component';
import { PasswordStrengthBarModule } from 'assets/libs/ng2-password-strength-bar/ng2-password-strength-bar.module';
import { AuthRoutingModule } from './routes/auth.routes.module';
/*COMPONENT_IMPORT*/


// *: Module
@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    ActionComponent,
    RegisterComponent,
    ResetPasswordComponent
    /*COMPONENT_DECLARATION*/
  ],
  imports: [
    SharedModule,
    PasswordStrengthBarModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports: [
    /*MODULE_EXPORT*/
  ]
})
export class AuthModule { }
