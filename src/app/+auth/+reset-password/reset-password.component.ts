import { Component } from '@angular/core';
import { AppService } from '@app/app.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: []
})
export class ResetPasswordComponent {

  loading: boolean;

  fg: FormGroup;
  complete: boolean;

  constructor(private appService: AppService, private toastr: ToastrService, private authService: AuthService) {
    this.appService.pageTitle = 'Login';

    this.fg = this.appService.buildFormGroup({ email: ''});

    this.fg.get('email').setValidators(Validators.required);
  }

  resetPassword() {
    this.authService.triggerResetPassword(this.fg.get('email').value).then(
      (cred) => {
        console.log(cred);
        this.complete = true;
      },
      (error) => {
        this.toastr.warning(error.message);
        console.log(error);
      }
    );
  }

}
