import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { ToastrService } from 'ngx-toastr';
import { AppSettingsService } from '../services/app-settings.service';
import { IAppSettings } from '../models/app-settings.model';
import * as _ from 'lodash';


@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: []
})
export class AppSettingsComponent implements OnInit {
  loading: boolean;
  settings: IAppSettings;

  teamTags: string[];

  curTab = 'general';

  constructor(private appService: AppService, private toastr: ToastrService, private appSettingsService: AppSettingsService) {
    this.appService.pageTitle = 'Settings';
  }


  ngOnInit() {
    this.loading = true;
    this.loadData();
  }

  private updateSettings() {
    this.settings.teams = _.map(this.teamTags, (t: string|any) => {
      if(typeof t === 'string') return t;

      return t.value;
    });

    this.appSettingsService.update('app', this.settings).then(
      () => {
        this.toastr.success('Settings Updated');
      }
    );
  }

  private changeTab(tabName: string){
    this.curTab = tabName;
  }


  private loadData() {
    this.appSettingsService.get('app').subscribe(
      settings => {
        this.settings = settings;
        this.teamTags = settings.teams;
        this.loading = false;
      }
    );

    this.loading = false;
  }
}
