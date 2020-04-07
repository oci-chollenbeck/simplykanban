import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CARD_ROUTE_NAMES } from './card.routes.names';


// *: Components
import { CardDetailsComponent } from '../+card-details/card-details.component';
  /*COMPONENT_IMPORT*/

// *: Routes
export const routes: Routes = [
{ path: CARD_ROUTE_NAMES.CARDDETAILS, component: CardDetailsComponent },
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
