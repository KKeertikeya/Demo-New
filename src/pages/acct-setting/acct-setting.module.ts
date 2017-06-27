import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcctSettingPage } from './acct-setting';

import { AcctInfoComponentModule } from '../../components/acct-info/acct-info.module';


@NgModule({
  declarations: [
    AcctSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(AcctSettingPage),
    AcctInfoComponentModule
  ],
  exports: [
    AcctSettingPage
  ]
})
export class AcctSettingPageModule {}
