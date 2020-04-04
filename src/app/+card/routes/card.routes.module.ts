import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CARD_ROUTE_NAMES } from './card.routes.names';


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
export class CardRoutingModule { }
