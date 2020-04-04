import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './routes/home.routes.module';
import { IndexComponent } from './+index/index.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    IndexComponent,
    /*COMPONENT_DECLARATION*/
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
    /*MODULE_IMPORT*/
  ],
  exports: [
    /*MODULE_EXPORT*/
  ]
})
export class HomeModule { }
