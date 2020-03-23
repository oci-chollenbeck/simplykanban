import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { BOARD_ROUTE_NAMES } from './routes/board.routes.names';


// *: Components
import { BoardComponent } from './+board/board.component';
import { PERMISSIONS } from '@app/+auth/models/permissions.const';
//{COMPONENT_IMPORT}

// *: Routes
export const routes: Routes = [
  { path: BOARD_ROUTE_NAMES.BOARD, component: BoardComponent, data: PERMISSIONS.authenticated },
  //{COMPONENT_ROUTE}
];


@NgModule({
  declarations: [
    BoardComponent,
  //{COMPONENT_DECLARATION}
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    //{MODULE_IMPORT}
  ],
  exports: [
    BoardComponent,
  //{MODULE_EXPORT}
  ]
})
export class BoardModule { }
