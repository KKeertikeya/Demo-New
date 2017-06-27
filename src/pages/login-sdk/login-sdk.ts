import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login-sdk',
  templateUrl: 'login-sdk.html',
})
export class LoginSdkPage {
  platform: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.platform = this.navParams.get('platform');
  }

}
