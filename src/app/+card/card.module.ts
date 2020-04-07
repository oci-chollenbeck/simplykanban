import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { CardRoutingModule } from './routes/card.routes.module';


// *: Components
import { CardDetailsComponent } from './+card-details/card-details.component';
import { NgbProgressbarModule, NgbDropdownModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { SortablejsModule } from 'ngx-sortablejs';
import { FormsModule } from '@angular/forms';

/*COMPONENT_IMPORT*/



@NgModule({
  declarations: [
    CardDetailsComponent,
    /*COMPONENT_DECLARATION*/
  ],
  imports: [
    SharedModule,
    FormsModule,
    NgbProgressbarModule,
    NgbDropdownModule,
    NgbTabsetModule,
    SortablejsModule,
    CardRoutingModule
    /*MODULE_IMPORT*/
  ],
  exports: [
    /*MODULE_EXPORT*/
  ]
})
export class CardModule { }
