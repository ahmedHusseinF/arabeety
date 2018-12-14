import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  foods: Food[] = [
    { value: 'National Id', viewValue: 'National ID' },
    { value: 'University Id', viewValue: 'University Id' },
    { value: 'Driving License Number', viewValue: 'Driving License Number' },
    { value: 'Car Pallete Number', viewValue: 'Car Pallete Number' },
    { value: 'Credit Card Number', viewValue: 'Credit Card Number' },
    { value: 'Other', viewValue: 'Other' }
  ];

  constructor() {}

  ngOnInit() {}
}
