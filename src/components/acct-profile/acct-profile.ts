import { Component, Input } from '@angular/core';

@Component({
  selector: 'acct-profile',
  templateUrl: 'acct-profile.html'
})
export class AcctProfileComponent {

  @Input() acct;
  @Input() deleteCallback: Function;
  @Input() refreshCallback: Function;
  constructor() {
    console.log('Hello AcctProfileComponent Component');
  }

}
