import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  types: Type[] = [
    { value: 'Car Crash', viewValue: 'Car Crash' },
    { value: 'Medical Emergency', viewValue: 'Medical Emergency' },
    { value: 'Blood Donation', viewValue: 'Blood Donation' },
    { value: 'Lost and Found', viewValue: 'Lost and Found' },
    { value: 'Other...', viewValue: 'Other...' }
  ];

  isHandset$: Observable<boolean> = this.breaker
    .observe(Breakpoints.Handset)
    .pipe(map(results => results.matches));

  url = 'https://www.eagles.org/wp-content/uploads/2015/01/post21.jpg';

  constructor(private breaker: BreakpointObserver) {}

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
    console.log(type.innerText.trim() + ' ' + desc.value + ' ' + tele.value);
    // TODO: delete logging and send as an object
  }
}
