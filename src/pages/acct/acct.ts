import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AcctMngProvider } from '../../providers/acct-mng/acct-mng';

@IonicPage()
@Component({
  selector: 'page-acct',
  templateUrl: 'acct.html',
})

export class AcctPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public acctMngService: AcctMngProvider) 
  {
    this.acctMngService.loadAccts();
  }

  ionViewDidLoad() {
    //this.acctMngService.loadAccts();
  }

  sendHandler() {
     this.acctMngService.sendAccts();
  }

}