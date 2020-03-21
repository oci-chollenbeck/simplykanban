import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { DASHBOARD_ROUTE_NAMES } from './routes/dashboard.routes.names';


// *: Components
import { IndexComponent } from './+index/index.component';
import { PERMISSIONS } from '@app/+auth/models/permissions.const';
//{COMPONENT_IMPORT}

// *: Routes
export const routes: Routes = [
  { path: DASHBOARD_ROUTE_NAMES.INDEX, component: IndexComponent, data: { checkPermissions: PERMISSIONS.authenticated } },
  //{COMPONENT_ROUTE}
];


@NgModule({
  declarations: [
    IndexComponent,
  //{COMPONENT_DECLARATION}
  ],
  imports: [
    SharedModule,
    ChartsModule,
    RouterModule.forChild(routes),
    //{MODULE_IMPORT}
  ],
  exports: [
    IndexComponent,
  //{MODULE_EXPORT}
  ]
})
export class DashboardModule { }
