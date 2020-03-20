import { Component } from '@angular/core';
import { AppService } from '@app/app.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { APP_ROUTE_NAMES } from '@app/app.routes.names';
import { AUTH_ROUTE_NAMES } from '../routes/auth.routes.names';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {

  loading: boolean;

  fg: FormGroup;

  constructor(private appService: AppService, private toastr: ToastrService, private router: Router, private authService: AuthService) {
    this.appService.pageTitle = 'Login';

    this.fg = this.appService.buildFormGroup({ email: '', password: '' });

    this.fg.get('email').setValidators(Validators.required);
    this.fg.get('password').setValidators(Validators.required);
  }

  login() {
    this.authService.login(this.fg.get('email').value, this.fg.get('password').value).then(
      (cred) => {
        if (cred.user.emailVerified) {
          this.router.navigate(['/']);
        }else{
          this.toastr.warning('Please confirm your email to activate your account');
          this.authService.logout().then(
            () => {
              this.router.navigate(['/', APP_ROUTE_NAMES.AUTH, AUTH_ROUTE_NAMES.LOGIN]);
            }
          )
        }
      },
      (error) => {
        this.toastr.warning(error.message);
        console.log(error);
      }
    );
  }


}
