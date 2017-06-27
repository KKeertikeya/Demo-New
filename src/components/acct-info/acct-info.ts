import { Component, Input } from '@angular/core';

@Component({
  selector: 'acct-info',
  templateUrl: 'acct-info.html'
})
export class AcctInfoComponent {

  @Input() acctList;
  @Input() acctLabels;
  constructor() {
    console.log('Hello AcctInfoComponent Component');
  }

}
