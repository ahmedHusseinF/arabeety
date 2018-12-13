import { Component, OnInit } from '@angular/core';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private snack: MatSnackBar) {}

  ngOnInit() {}

  success(auth: FirebaseUISignInSuccessWithAuthResult) {
    this.snack.open(`Welcome ${auth.authResult.user.displayName}`, null, {
      duration: 5 * 1000,
      horizontalPosition: 'center'
    });
  }
}
