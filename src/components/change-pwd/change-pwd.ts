import { Component } from '@angular/core';

@Component({
  selector: 'change-pwd',
  templateUrl: 'change-pwd.html'
})
export class ChangePwdComponent {
  pwdLabels: any = {
    state: false,
    change: 'Change Password',
    cancel: 'Cancel',
    new: 'New Password',
    verify: 'Verify New Password'
  }

  constructor() {
    console.log('Hello ChangePwdComponent Component');
  }

  togglePwd() {
    console.log('togglePwd', this.pwdLabels.state);
    this.pwdLabels.state = !this.pwdLabels.state;
  }

}
