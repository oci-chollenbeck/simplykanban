// *: DO NOT REMOVE THE //{} COMMENTS.  `
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BOARD_ROUTE_NAMES } from './board.routes.names';

// *: Components
//{COMPONENT_IMPORT}

// *: Routes
export const routes: Routes = [
//{COMPONENT_ROUTE}
];

// *: Module
@NgModule({
  declarations: [
    RouterModule.forChild(routes),
    //{COMPONENT_DECLARATION}
  ],
  exports: [
    RouterModule,
    //{MODULE_EXPORT}
  ]
})
export class BoardRoutingModule { }
