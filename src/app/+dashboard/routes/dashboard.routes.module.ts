import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DASHBOARD_ROUTE_NAMES } from './dashboard.routes.names';


// *: Components
import { DashboardIndexComponent } from '../+dashboard-index/dashboard-index.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { GUARD_PIPES } from '@app/+auth/guards/guard-pipes.const';
/*COMPONENT_IMPORT*/

// *: Routes
export const routes: Routes = [
  { path: DASHBOARD_ROUTE_NAMES.DASHBOARDINDEX, component: DashboardIndexComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: GUARD_PIPES.redirectUnauthorizedToLogin } },
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
export class DashboardRoutingModule { }
