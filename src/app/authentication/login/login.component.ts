import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/shared/services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any
  constructor(private fb: FormBuilder, private route: Router, private userStaus: UserLoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      logInEmail: [null, [Validators.required, Validators.pattern(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)]],
      logInPassword: [null, [Validators.required, Validators.pattern(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/)]],
    })
  }
  get controls() {
    return this.loginForm.controls
  }
  submitValue() {
    this.userStaus.changeLoginState(true);
    this.route.navigate(['/store']);
    // alert(this.loginForm.value)
  }

}
