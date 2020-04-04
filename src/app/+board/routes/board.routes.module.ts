import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BOARD_ROUTE_NAMES } from './board.routes.names';


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
export class BoardRoutingModule { }
