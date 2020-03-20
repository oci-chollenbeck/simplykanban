import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { Subject } from 'rxjs/internal/Subject';
import { last } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  private version: Subject<string>;
  private currentVersion: string;

  constructor(private remoteConfig: AngularFireRemoteConfig, private toastr: ToastrService) {
    // set default version
    this.version = new Subject<string>();
    this.currentVersion = null;
  }

  getVersion(): Subject<string> {
    return this.version;
  }

  refreshVersion() {
    this.version.next(this.currentVersion);
  }

  promptNewVersion(version: string): void {
    this.toastr.clear;
    this.toastr.info('Version ' + version + ' is now available');
    this.toastr.info('Refresh your page to apply the update.');
  }

  remoteConfigInit(): void {
    // Remote Configs for version control
    this.remoteConfig.activate();
    this.remoteConfig.strings.version.pipe(last()).subscribe(
      (version) => {
        this.version.next(version);
        this.currentVersion = version;
      }
    );
  }

  watchVersion(): void {
    // Remote Configs for version control
    this.remoteConfig.strings.version.subscribe(
      (version) => {
        if (version > this.currentVersion) {
          this.promptNewVersion(version);
        }
      }
    );
  }

}
