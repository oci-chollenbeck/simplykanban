/* tslint:disable:max-line-length */
import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { FormGroup } from '@angular/forms';
import { AuthService } from '@app/+auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FileUploadService } from '@app/shared/services/file-upload.service';
import { FileUploader } from 'assets/libs/ng2-file-upload';

@Component({
  selector: 'app-account-profile',
  templateUrl: './profile.component.html',
  styleUrls: []
})
export class ProfileComponent {

  fg: FormGroup;

  user: firebase.User;
  curTab: string;

  submit: () => void;

  uploader = new FileUploader({ url: '' });

  constructor(private appService: AppService, private authService: AuthService, private toastr: ToastrService, private uploadService: FileUploadService) {
    this.appService.pageTitle = 'Account settings';

    this.authService.authStatus.subscribe(
      isLoggedIn => {
        if (isLoggedIn) {
          this.user = this.authService.getCurrentUser();
          this.changeTab('general');

        } else {
          this.toastr.error('Please login to access this page');
        }

      },
      err => {
        console.log(err);
      }
    );
  }


  updateProfileImage() {
    this.toastr.info('Updating profile image. Please wait.');
    const uploadPath = 'profile-images/' + this.user.uid;

    this.uploadService.uploadFile(uploadPath, this.uploader.queue[0].file.rawFile).then(
      (snapshot) => {
        if (snapshot.bytesTransferred === snapshot.totalBytes) {
          // Done uploading
          snapshot.ref.getDownloadURL().then(
            (val) => {
              this.user.updateProfile({ photoURL: val }).then(
                () => {
                  this.toastr.success('Profile image updated');
                  this.uploader.clearQueue();

                }
              );
            }
          );


        }
      },
      (err) => {
        console.log(err);
      }
    );
  }



  changeTab(tabName: string) {

    switch (tabName) {
      case 'general':
        this.fg = this.appService.buildFormGroup({ displayName: '' }, { displayName: this.user.displayName });
        this.submit = this.updateProfileGeneral;
        break;
      case 'notifications': this.fg = this.appService.buildFormGroup({ displayName: '' }, { displayName: this.user.displayName }); break;
      default: break;
    }

    this.curTab = tabName;
  }

  private updateProfileGeneral() {
    this.user.updateProfile(this.fg.getRawValue()).then(
      () => {
        this.toastr.success('Account updated');
      }
    );
  }

  languages = [
    { value: 'English', label: 'English' },
    { value: 'German', label: 'German' },
    { value: 'French', label: 'French' }
  ];

  accountData = {
    avatar: '5-small.png',
    name: 'Nelle Maxwell',
    username: 'nmaxwell',
    email: 'nmaxwell@mail.com',
    company: 'Company Ltd.',
    verified: false,

    info: {
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus.',
      birthday: 'May 3, 1995',
      country: 'Canada',
      languages: ['English'],
      phone: '+0 (123) 456 7891',
      website: '',
      music: ['Rock', 'Alternative', 'Electro', 'Drum & Bass', 'Dance'],
      movies: ['The Green Mile', 'Pulp Fiction', 'Back to the Future', 'WALL·E', 'Django Unchained', 'The Truman Show', 'Home Alone', 'Seven Pounds'],

      twitter: 'https://twitter.com/user',
      facebook: 'https://www.facebook.com/user',
      google: '',
      linkedin: '',
      instagram: 'https://www.instagram.com/user'
    },

    notifications: {
      comments: true,
      forum: true,
      followings: false,
      news: true,
      products: false,
      blog: true
    }
  };
}
