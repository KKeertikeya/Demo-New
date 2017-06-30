import { FormControl, FormGroup } from '@angular/forms';

export class MatchPwdValidator {
    static isMatching(group: FormGroup): any {

        let new_pwd = group.controls['new_pwd'].value;
        let verify_pwd = group.controls['verify_pwd'].value;
        console.log("Matching Pwd Validator", new_pwd, verify_pwd);
        console.log("new_pwd != verify_pwd", (new_pwd != verify_pwd) );

        if( (new_pwd && verify_pwd) && (new_pwd === verify_pwd) ) {
            console.log ('null');
            return null;
        } else {
            console.log ('mismatch');
            group.controls['verify_pwd'].setErrors({ "mismatch": true });
            return { "mismatch": true }
        }
    }
}