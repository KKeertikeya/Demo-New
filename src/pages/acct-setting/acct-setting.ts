import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AcctMngProvider } from '../../providers/acct-mng/acct-mng';

@IonicPage()
@Component({
  selector: 'page-acct-setting',
  templateUrl: 'acct-setting.html',
})
export class AcctSettingPage {
  acctList: any;
  acctLabels: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public acctMngService: AcctMngProvider) 
  {
    this.acctMngService.loadAccts();
    this.acctList = this.acctMngService.acctList;
    this.acctLabels = this.acctMngService.acctLabels;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcctSettingPage');
  }

  saveHandler() {
    console.log('save clicked');
  }

  cancelHandler() {
    console.log('cancel clicked');
  }

}
