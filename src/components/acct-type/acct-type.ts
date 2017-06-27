import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'acct-type',
  templateUrl: 'acct-type.html'
})
export class AcctTypeComponent {

  @Input() type;
  @Input() addCallback: Function;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addPlatform(platform) {
    console.log('addPlatform', platform);
    this.navCtrl.push('LoginSdkPage', {platform: platform});
  }
}
