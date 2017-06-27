import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginSdkPage } from './login-sdk';

@NgModule({
  declarations: [
    LoginSdkPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginSdkPage),
  ],
  exports: [
    LoginSdkPage
  ]
})
export class LoginSdkPageModule {}
