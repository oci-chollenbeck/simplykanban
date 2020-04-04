import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { SettingsRoutingModule } from './routes/settings.routes.module';


// *: Components
/*COMPONENT_IMPORT*/



@NgModule({
  declarations: [
    /*COMPONENT_DECLARATION*/
  ],
  imports: [
    SharedModule,
    SettingsRoutingModule
    /*MODULE_IMPORT*/
  ],
  exports: [
    /*MODULE_EXPORT*/
  ]
})
export class SettingsModule { }
