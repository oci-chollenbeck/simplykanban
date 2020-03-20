import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '@app/app.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: []
})
export class LogoutComponent implements OnInit {

  loading: boolean;

  constructor(private appService: AppService, private toastr: ToastrService, private authService: AuthService, private router: Router) {
    this.appService.pageTitle = 'Logout';

  }

  ngOnInit() {
    this.loading = true;

    // Load Data
    this.authService.logout().then(
      () => {
        this.toastr.success('Logout successful');
        this.router.navigate(['/']);
      },
      () => {
        this.toastr.error('Logout failed');
      }
    );
  }
}
