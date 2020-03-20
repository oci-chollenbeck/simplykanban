import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { ACCOUNT_ROUTE_NAMES } from './routes/account.routes.names';

// *: Components
import { ProfileComponent } from './+profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'assets/libs/ng2-file-upload';
//{COMPONENT_IMPORT}

// *: Routes
export const routes: Routes = [
  { path: ACCOUNT_ROUTE_NAMES.PROFILE, component: ProfileComponent },
  //{COMPONENT_ROUTE}
];

// *: Module
@NgModule({
  declarations: [
    ProfileComponent,
    //{COMPONENT_DECLARATION}
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    ProfileComponent,
    //{MODULE_EXPORT}
  ]
})
export class AccountModule { }
