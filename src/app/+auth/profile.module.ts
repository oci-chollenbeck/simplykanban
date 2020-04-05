// *: DO NOT REMOVE THE //{} COMMENTS.  `
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { ProfileRoutingModule } from './routes/profile.routes.module';
import { ProfileComponent } from './+profile/profile.component';
/*COMPONENT_IMPORT*/


// *: Module
@NgModule({
  declarations: [
    ProfileComponent
    /*COMPONENT_DECLARATION*/
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ],
  exports: [
    /*MODULE_EXPORT*/
  ]
})
export class ProfileModule { }
