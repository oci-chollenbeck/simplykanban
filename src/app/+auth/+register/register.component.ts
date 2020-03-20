import { Component } from '@angular/core';
import { AppService } from '@app/app.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TosComponent } from '@app/shared/+tos/tos.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent {

  submitting: boolean;
  complete: boolean;

  fg: FormGroup;

  constructor(private appService: AppService, private toastr: ToastrService, private authService: AuthService, private modalService: NgbModal) {
    this.appService.pageTitle = 'Register';

    const credentials = { name: '', email: '', password: '' };

    this.fg = this.appService.buildFormGroup(credentials);

    this.fg.get('name').setValidators(Validators.required);
    this.fg.get('email').setValidators([Validators.required, Validators.email]);
    this.fg.get('password').setValidators([Validators.required, Validators.minLength(5), Validators.maxLength(24)]);
  }

  register() {
    const formVal = this.fg.getRawValue();

    this.submitting = true;
    this.authService.register(formVal.email, formVal.password).then(
      (cred) => {
        this.updateProfile(cred, formVal.name).then(
          () => {
            cred.user.sendEmailVerification().then(
              () => {
                this.complete = true;
                this.fg.reset();
              },
              (err) => {
                this.toastr.warning(err.message);
              }
            );
          }
        );
      },
      (err) => {
        this.toastr.warning(err.message);
      }
    );
  }

  checkInputValidity(controlName: string, returnClass: boolean): boolean | string {
    if (this.fg.get(controlName).valid) {
      return (returnClass) ? 'is-valid' : true;
    }
    if (this.fg.get(controlName).dirty)
      return (returnClass) ? 'is-invalid' : false;

    return '';
  }

  getControlError(controlName: string) {
    if (this.fg.get(controlName).invalid && this.fg.get(controlName).dirty) {
      const keys = Object.keys(this.fg.get(controlName).errors);

      if (keys.length > 0) {
        switch (keys[0]) {
          case 'required':
            return 'This field is required';
          case 'email':
            return 'This email is invalid';
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

  updateProfile(cred: firebase.auth.UserCredential, username: string) {
    return cred.user.updateProfile({ displayName: username });
  }

  showTOS(){
    this.modalService.open(TosComponent);
  }



}
