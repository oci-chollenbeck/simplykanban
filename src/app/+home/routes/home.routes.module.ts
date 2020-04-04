// *: DO NOT REMOVE THE //{} COMMENTS.  `
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HOME_ROUTE_NAMES } from './home.routes.names';

// *: Components
import { IndexComponent } from '../+index/index.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { GUARD_PIPES } from '@app/+auth/guards/guard-pipes.const';
/*COMPONENT_IMPORT*/

// *: Routes
export const routes: Routes = [
  // { path: HOME_ROUTE_NAMES.INDEX, component: IndexComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: GUARD_PIPES.redirectUnauthorizedToLogin} },
  { path: HOME_ROUTE_NAMES.INDEX, component: IndexComponent },
/*COMPONENT_ROUTE*/
];

// *: Module
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
