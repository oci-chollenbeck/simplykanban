import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './routes/home.routes.module';


@NgModule({
  imports: [
    HomeRoutingModule,
    //{MODULE_IMPORT}
  ],
  exports: [
    //{MODULE_EXPORT}
  ]
})
export class HomeModule { }
