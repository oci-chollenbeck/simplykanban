import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { DashboardRoutingModule } from './routes/dashboard.routes.module';


// *: Components
import { DashboardIndexComponent } from './+dashboard-index/dashboard-index.component';
  /*COMPONENT_IMPORT*/



@NgModule({
  declarations: [
    DashboardIndexComponent,
  /*COMPONENT_DECLARATION*/
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule
    /*MODULE_IMPORT*/
  ],
  exports: [
    /*MODULE_EXPORT*/
  ]
})
export class DashboardModule { }
