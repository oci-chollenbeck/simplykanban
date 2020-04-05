import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { SettingsRoutingModule } from './routes/settings.routes.module';


// *: Components
import { AppSettingsComponent } from './+app-settings/app-settings.component';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';

/*COMPONENT_IMPORT*/



@NgModule({
  declarations: [
    AppSettingsComponent,
    /*COMPONENT_DECLARATION*/
  ],
  imports: [
    SharedModule,
    FormsModule,
    TagInputModule,
    SettingsRoutingModule
    /*MODULE_IMPORT*/
  ],
  exports: [
    /*MODULE_EXPORT*/
  ]
})
export class SettingsModule { }
