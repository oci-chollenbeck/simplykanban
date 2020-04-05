import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'template/not-found/not-found.component';

// *******************************************************************************
// Layouts

import { Layout2Component } from 'template/layout-2/layout-2.component';
import { APP_ROUTE_NAMES } from './app.routes.names';
import { LayoutBlankComponent } from 'template/layout-blank/layout-blank.component';



// *******************************************************************************
// Routes

const routes: Routes = [
  {
    path: APP_ROUTE_NAMES.DEFAULT,
    component: Layout2Component,
    pathMatch: 'full',
    children: [
      { path: '', loadChildren: () => import('./+dashboard/dashboard.module').then(m => m.DashboardModule) },
    ]
  },
  {
    path: APP_ROUTE_NAMES.PROFILE,
    component: Layout2Component,
    children: [
      { path: '', loadChildren: () => import('./+auth/profile.module').then(m => m.ProfileModule) },
    ]
  },
  {
    path: APP_ROUTE_NAMES.AUTH,
    component: LayoutBlankComponent,
    children: [
      { path: '', loadChildren: () => import('./+auth/auth.module').then(m => m.AuthModule) },
    ]
  },
  {
    path: APP_ROUTE_NAMES.BOARD,
    component: Layout2Component,
    children: [
      { path: '', loadChildren: () => import('./+board/board.module').then(m => m.BoardModule) },
    ]
  },
  {
    path: APP_ROUTE_NAMES.CARD,
    component: Layout2Component,
    children: [
      { path: '', loadChildren: () => import('./+card/card.module').then(m => m.CardModule) },
    ]
  },
  {
    path: APP_ROUTE_NAMES.SETTINGS,
    component: Layout2Component,
    children: [
      { path: '', loadChildren: () => import('./+settings/settings.module').then(m => m.SettingsModule) },
    ]
  },
  /*APP_ROUTE*/

  // 404 Not Found page
  { path: '**', component: NotFoundComponent }
];

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
