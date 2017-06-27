import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AcctInfoComponent } from './acct-info';

import { ChangePwdComponentModule } from '../change-pwd/change-pwd.module';

@NgModule({
  declarations: [
    AcctInfoComponent,
  ],
  imports: [
    IonicModule,
    ChangePwdComponentModule
  ],
  exports: [
    AcctInfoComponent
  ]
})
export class AcctInfoComponentModule {}
