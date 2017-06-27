import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// dummy data
import accttypes from '../../assets/data/accttypes';
import acctlist from '../../assets/data/acctlist';
import acctlabels from '../../assets/data/acctlabels';

@Injectable()
export class AcctMngProvider {
  acctTypes:  any[];
  acctList:   any;
  acctLabels: any;

  constructor(public http: Http) {
    console.log('Hello AcctMngProvider Provider');
  }

  deleteProfile(profile) {
    console.log('deleteProfile', profile);
  }

  refreshProfile(profile) {
    console.log('refreshProfile', profile);
  }

  loadAccts() {
    console.log('loadAccts');
    this.acctTypes  = accttypes;
    this.acctList   = acctlist;
    this.acctLabels = acctlabels;
    this.manipulateData();
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

}
