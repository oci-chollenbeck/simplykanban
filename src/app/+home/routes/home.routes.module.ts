// *: DO NOT REMOVE THE //{} COMMENTS.  `
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HOME_ROUTE_NAMES } from './home.routes.names';

// *: Components
import { IndexComponent } from '../+index/index.component';
//{COMPONENT_IMPORT}

// *: Routes
export const routes: Routes = [
  { path: HOME_ROUTE_NAMES.INDEX, component: IndexComponent },
  //{COMPONENT_ROUTE}
];

// *: Module
@NgModule({
  declarations: [
    //{COMPONENT_DECLARATION}
    IndexComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
    //{MODULE_EXPORT}
  ]
})
export class HomeRoutingModule { }
