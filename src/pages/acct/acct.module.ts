import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcctPage } from './acct';

import { AcctTypeComponentModule } from '../../components/acct-type/acct-type.module';
import { AcctProfileComponentModule } from '../../components/acct-profile/acct-profile.module';

@NgModule({
  declarations: [
    AcctPage,
  ],
  imports: [
    AcctTypeComponentModule,
    AcctProfileComponentModule,
    IonicPageModule.forChild(AcctPage),
  ],
  exports: [
    AcctPage
  ]
})
export class AcctPageModule {}
