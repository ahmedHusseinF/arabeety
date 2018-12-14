import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material';
import { RequestComponent } from './request/request.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [RequestComponent]
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private afAuth: AngularFireAuth,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    console.log('running...');
    console.log(this.dialog);
    const dialogRef = this.dialog.open(RequestComponent, {
      width: '80%',
      height: 'auto',
      data: {}
    });
  }

  ngOnInit() {}
}
