import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SETTINGS_ROUTE_NAMES } from './settings.routes.names';


// *: Components
import { AppSettingsComponent } from '../+app-settings/app-settings.component';
  /*COMPONENT_IMPORT*/

// *: Routes
export const routes: Routes = [
{ path: SETTINGS_ROUTE_NAMES.APPSETTINGS, component: AppSettingsComponent },
  /*COMPONENT_ROUTE*/
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class SettingsRoutingModule { }
