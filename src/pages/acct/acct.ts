import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AcctMngProvider } from '../../providers/acct-mng/acct-mng';

@IonicPage()
@Component({
  selector: 'page-acct',
  templateUrl: 'acct.html',
})

export class AcctPage {
  data: any;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public acctMngService: AcctMngProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('did load');
    this.loading = this.loadingCtrl.create({
      content: `Loading...`
    })
    this.loading.present();
    this.acctMngService.loadAccts().then( result => {
      this.data = result
      console.log('result', result)
      this.loading.dismiss();      
    }).catch(error => {
      console.log('err', error)
    });
  }// end ionViewDidLoad

  sendHandler() {
    this.acctMngService.sendAccts();
  }

}// end export class AcctPage