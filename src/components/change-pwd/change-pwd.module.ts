import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ChangePwdComponent } from './change-pwd';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChangePwdComponent,
  ],
  imports: [
    IonicModule,
    FormsModule
  ],
  exports: [
    ChangePwdComponent
  ]
})
export class ChangePwdComponentModule {}
