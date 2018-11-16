import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';

import { ICity } from './interfaces';

@Component({
  selector: 'app-mat-select-filter',
  templateUrl: './mat-select-filter.component.html',
  styleUrls: ['./mat-select-filter.component.scss']
})
export class MatSelectFilterComponent implements OnInit {
  cities: Array<ICity> = cities;
  frmFilterTest: FormGroup;

  cityFiltered: FormControl = new FormControl();

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.frmFilterTest = this.formBuilder.group({
      city: '',
      testFilter: []
    });

    this.cityFiltered.valueChanges.pipe(take(5)).subscribe(() =>
      this.filterCities()
    );
  }


  filterCities() {
    this.cities = this.cities.filter(x => x.value.toLowerCase().indexOf(this.cityFiltered.value) !== -1);
    console.log('filtered');
  }
}


export const cities: Array<ICity> = new Array<ICity>(
  { id: 1, value: 'Tel-aviv' },
  { id: 2, value: 'Hertzelia' },
  { id: 3, value: 'Qiryat-ono' },
  { id: 4, value: 'Petach-tikva' },
  { id: 5, value: 'Raanana' },
  { id: 6, value: 'Netanya' },
  { id: 7, value: 'Haifa' },
);

