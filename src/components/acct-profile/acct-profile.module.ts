import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AcctProfileComponent } from './acct-profile';

import { DemoPipeModule } from '../../pipes/demo/demo.module';
import { ToRowsPipeModule } from '../../pipes/to-rows/to-rows.module';


@NgModule({
  declarations: [
    AcctProfileComponent,
  ],
  imports: [
    IonicModule,
    DemoPipeModule,
    ToRowsPipeModule
  ],
  exports: [
    AcctProfileComponent
  ]
})
export class AcctProfileComponentModule {}
