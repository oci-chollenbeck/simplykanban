import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { APP_ROUTE_NAMES } from '@app/app.routes.names';
import { AUTH_ROUTE_NAMES } from '../routes/auth.routes.names';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: []
})
export class ActionComponent implements OnInit {

  loading: boolean;

  fg: FormGroup;
  mode: string;
  code: string;

  emailComplete: boolean;

  constructor(private appService: AppService, private toastr: ToastrService, private activeRoute: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.appService.pageTitle = 'Account Actions';

  }

  ngOnInit() {
    this.loading = true;

    this.activeRoute.queryParamMap.subscribe(
      (map) => {
        this.initAction(map.get('mode'), map.get('oobCode'));
      }
    );

  }

  initAction(mode: string, code: string) {
    this.mode = mode;
    this.code = code;

    switch (mode) {
      case 'resetPassword': this.initResetPassword(); break;
      case 'verifyEmail': this.initVerifyEmail(); break;
      default: this.toastr.warning('This action code is unsupported.'); this.router.navigate(['/', APP_ROUTE_NAMES.AUTH, AUTH_ROUTE_NAMES.LOGIN]);
    }
  }

  initResetPassword() {
    this.fg = this.appService.buildFormGroup({ password: '', confirmPassword: '' });

    this.fg.get('password').setValidators([Validators.required, Validators.minLength(5), Validators.maxLength(24)]);
    this.fg.get('confirmPassword').setValidators([Validators.required, Validators.minLength(5), Validators.maxLength(24)]);

    this.loading = false;
  }

  submitResetPassword() {
    if (this.fg.get('password').value === this.fg.get('confirmPassword').value) {
      this.authService.resetPassword(this.code, this.fg.get('confirmPassword')).then(
        () => {
          this.toastr.success('Password reset.');
          this.router.navigate(['/identity/login']);
        }
      );
    } else {
      this.toastr.warning('Passwords do not match, please try again');
    }
  }

  initVerifyEmail() {
    this.emailComplete = false;
    this.authService.confirmEmail(this.code).then(
      () => {
        this.toastr.success('Your email has been confirmed. Please login to continue');
        this.router.navigate(['/', 'identity', 'login']);
        this.emailComplete = true;
      },
      (err) => {
        this.toastr.warning(err.message);
        this.router.navigate(['/', 'identity', 'login']);
      }
    );
  }

  getControlError(controlName: string) {
    if (this.fg.get(controlName).invalid && this.fg.get(controlName).dirty) {
      const keys = Object.keys(this.fg.get(controlName).errors);

      if (keys.length > 0) {
        switch (keys[0]) {
          case 'required':
            return 'This field is required';
          case 'minlength':
            return 'Field is not long enough';
          case 'maxlength':
            return 'Field max size exceed ';
          default:
            return 'An error occurred';
        }
      }
    }
  }
}
