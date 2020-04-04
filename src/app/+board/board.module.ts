import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { BoardRoutingModule } from './routes/board.routes.module';


// *: Components
/*COMPONENT_IMPORT*/



@NgModule({
  declarations: [
    /*COMPONENT_DECLARATION*/
  ],
  imports: [
    SharedModule,
    BoardRoutingModule
    /*MODULE_IMPORT*/
  ],
  exports: [
    /*MODULE_EXPORT*/
  ]
})
export class BoardModule { }
