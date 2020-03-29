import { Component } from '@angular/core';
import { AppService } from '@app/app.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { APP_ROUTE_NAMES } from '@app/app.routes.names';
import { AUTH_ROUTE_NAMES } from '../routes/auth.routes.names';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: []
})
export class ResetPasswordComponent {

  loading: boolean;

  fg: FormGroup;
  complete: boolean;

  constructor(private appService: AppService, private toastr: ToastrService, private authService: AuthService, private router: Router) {
    this.appService.pageTitle = 'Login';

    this.fg = this.appService.buildFormGroup({ email: '' });

    this.fg.get('email').setValidators(Validators.required);
  }

  resetPassword() {
    this.authService.triggerResetPassword(this.fg.get('email').value).then(
      (cred) => {
        console.log(cred);
        this.complete = true;
        setTimeout(() => { this.router.navigate(['/', APP_ROUTE_NAMES.AUTH, AUTH_ROUTE_NAMES.LOGIN]); }, 2000);
      },
      (error) => {
        this.toastr.warning(error.message);
        console.log(error);
      }
    );
  }

}
