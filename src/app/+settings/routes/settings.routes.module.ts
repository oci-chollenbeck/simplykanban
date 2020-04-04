import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SETTINGS_ROUTE_NAMES } from './settings.routes.names';


// *: Components
/*COMPONENT_IMPORT*/

// *: Routes
export const routes: Routes = [
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
