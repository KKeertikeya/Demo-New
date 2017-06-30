import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

// dummy data
import accttypes from '../../assets/data/accttypes';
import acctlist from '../../assets/data/acctlist';
import acctlabels from '../../assets/data/acctlabels';

@Injectable()
export class AcctMngProvider {
  acctTypes:    any[];
  acctList:     any;
  acctLabels:   any;
  acctToggle:   boolean = false;
  data:         any;
  dataReceived: boolean = true;

  constructor(public http: Http, public loadingCtrl: LoadingController) {
  }

  deleteProfile(profile) {
    console.log('deleteProfile', profile);
  }

  refreshProfile(profile) {
    console.log('refreshProfile', profile);
  }

  loadAccts() {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        if (this.dataReceived) {
          console.log('loadAccts');
          this.acctTypes  = accttypes;
          this.acctList   = acctlist;
          this.acctLabels = acctlabels;
          this.manipulateData();
          this.data = {
            "acctTypes"  : this.acctTypes,
            "acctList"   : this.acctList, 
            "acctLabels" : this.acctLabels, 
            "acctToggle" : this.acctToggle
          }
          resolve( this.data )
        } else {
          reject({ error: "dataReceived false" })
        }      
      }, 4000)
    })
  }

  sendAccts() {
    console.log('sendAccts', this.acctList);
  }

  manipulateData() {
    this.acctList.account.forEach( function(acct) {
      acct.color = acct.type.toLowerCase();
      acct.logo = "logo-" + acct.color;
      if (acct.monitored === "on") {
        acct.enabled = true;
      } else {
        acct.enabled = false;
      }
    })
  }

  toggleAllProfiles() {
    if (this.data.acctToggle) {
      this.data.acctList.account.forEach( function(acct) {
        acct.enabled = true
      });
    }
  }

/*   presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
    //this.loading.create({
      content: 'Please wait...'
    });
    this.loading.present();
    setTimeout(() => {
      this.loading.dismiss();
    }, 5000);
  }

  dismissLoadingDefault() {
    this.loading.dismiss();
  } */

}