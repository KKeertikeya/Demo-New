import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchPwdValidator } from '../../validators/match-pwd';

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
    verify: 'Verify New Password',
    submit: 'Submit'
  }
  pwdForm: FormGroup;
  post: any;
  new_pwd: string = '';
  verify_pwd: string = '';


  constructor(private _formBuilder: FormBuilder) {
    console.log('Hello ChangePwdComponent Component');
    this.pwdForm = this._formBuilder.group({
      'new_pwd': [null, Validators.compose([ 
          Validators.required, 
          Validators.minLength(8), 
          Validators.maxLength(16) ])
      ],
      'verify_pwd': [null, Validators.compose([ 
        Validators.required, 
        Validators.minLength(8), 
        Validators.maxLength(16) ])
      ]

    }, {'validator': MatchPwdValidator.isMatching} ) 
  }

  sendPwd(post) {
    this.new_pwd = post.new_pwd;
    this.togglePwd();
    console.log('sendPwd', this.new_pwd)
  }

  togglePwd() {
    console.log('togglePwd', this.pwdLabels.state);
    this.pwdLabels.state = !this.pwdLabels.state;
    this.pwdForm.reset();
  }

}
