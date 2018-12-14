import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFireFunctions } from '@angular/fire/functions';
export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  foods: Food[] = [
    { value: 'Car Crash', viewValue: 'Car Crash' },
    { value: 'Medical Emergency', viewValue: 'Medical Emergency' },
    { value: 'Blood Donation', viewValue: 'Blood Donation' },
    { value: 'Lost and Found', viewValue: 'Lost and Found' },
    { value: 'Other...', viewValue: 'Other...' }
  ];

  url: string;

  isHandset$: Observable<boolean> = this.breaker
    .observe(Breakpoints.Handset)
    .pipe(map(results => results.matches));

  constructor(
    public dialogRef: MatDialogRef<RequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Food,
    private breaker: BreakpointObserver,
    private afFunctions: AngularFireFunctions
  ) {}

  ngOnInit() {}

  submitRequest(event) {
    console.log(event);
    const type: HTMLInputElement = document.getElementById(
      'type'
    ) as HTMLInputElement;
    const desc: HTMLInputElement = document.getElementById(
      'desc'
    ) as HTMLInputElement;
    const tele: HTMLInputElement = document.getElementById(
      'tele'
    ) as HTMLInputElement;

    // TODO: delete logging and send as an object

    const data = {
      requestType: type.textContent.trim(),
      description: desc.textContent.trim(),
      mobile: tele.textContent.trim(),
      createdAt: Date.now(),
      userLocation: { lat: 0, lng: 0 }
    };

    console.log({ data });

    const remoteFn = this.afFunctions.httpsCallable('respondToRequest');
    remoteFn(data);
  }

  onSelectFile(event) {
    // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = ev => {
        // called once readAsDataURL is completed
        this.url = (event.target as FileReader).result.toString();
      };
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
