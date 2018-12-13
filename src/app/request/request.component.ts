import { Component, OnInit } from '@angular/core';

export interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  types: Type[] = [
    { value: 'Car Crash', viewValue: 'Car Crash' },
    { value: 'Medical Emergency', viewValue: 'Medical Emergency' },
    { value: 'Blood Donation', viewValue: 'Blood Donation' },
    { value: 'Lost and Found', viewValue: 'Lost and Found' },
    { value: 'Other...', viewValue: 'Other...' }
  ];

  url: string;

  constructor() {}

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

  onSelectFile(event) {
    // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = ev => {
        // called once readAsDataURL is completed
        this.url = (ev.target as FileReader).result.toString();
      };
    }
  }
}
