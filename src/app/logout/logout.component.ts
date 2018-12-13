import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async ngOnInit() {
    await this.afAuth.auth.signOut();
    await this.router.navigateByUrl('/login');
  }
}
