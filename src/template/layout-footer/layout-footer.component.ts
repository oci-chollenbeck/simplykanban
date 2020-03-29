/* eslint-disable no-empty-function */
import { Component, HostBinding, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { VersionService } from '@app/shared/services/version.service';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styles: [':host { display: block; }']
})
export class LayoutFooterComponent implements OnInit {
  @HostBinding('class.layout-footer') hostClassMain = true;

  version = '1.0.0';

  constructor(private appService: AppService, private versionService: VersionService) {
    // this.versionService.refreshVersion();
  }

  ngOnInit() {
    this.versionService.getVersion().subscribe(
      v => {
        setTimeout(() => {
          this.version = v;
          this.versionService.watchVersion();
        });
      }
    );

    this.versionService.refreshVersion();
  }

  currentBg() {
    return `bg-${this.appService.layoutFooterBg}`;
  }
}
