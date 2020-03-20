import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// *******************************************************************************
// NgBootstrap

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
// App

import { AppRoutingModule } from './app.routes.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from 'template/not-found/not-found.component';
import { AppService } from './app.service';
import { LayoutModule } from 'template/layout.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireRemoteConfigModule, DEFAULTS, SETTINGS } from '@angular/fire/remote-config';
import { AngularFireMessagingModule } from '@angular/fire/messaging';

// *******************************************************************************
// Pages

import { SharedModule } from './shared/shared.module';
import { environment } from '@environments/environment';
import { ToastrModule } from 'ngx-toastr';

// *******************************************************************************
//

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot({
      toastClass: 'toast'
    }),

    // App
    AppRoutingModule,
    LayoutModule,
    SharedModule,

    // Firebase
    // AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireRemoteConfigModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],

  providers: [
    Title,
    AppService,
    { provide: DEFAULTS, useValue: {version: environment.version} },
    { provide: SETTINGS, useValue: { minimumFetchIntervalMillis: 6000 } },

  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
