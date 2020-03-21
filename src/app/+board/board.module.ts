import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { BoardRoutingModule } from './routes/board.routes.module';


// **************************************************
// Components & Services
//{COMPONENT_IMPORT}


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    BoardRoutingModule,
    //{MODULE_IMPORT}
  ],
  exports: [
    //{MODULE_EXPORT}
  ]
})
export class BoardModule { }
