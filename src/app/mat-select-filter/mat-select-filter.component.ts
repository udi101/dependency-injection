import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ControlValueAccessor } from '@angular/forms';

import { IAnimal } from './interfaces';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'gw-select-filter',
  templateUrl: './mat-select-filter.component.html',
  styleUrls: ['./mat-select-filter.component.scss']
})
export class MatSelectFilterComponent implements OnInit, ControlValueAccessor {

  componentActive = true;
  @Input() animals: Array<IAnimal> = new Array<IAnimal>();
  filteredAnimals: Array<IAnimal> = new Array<IAnimal>();
  frmFilterTest: FormGroup;
  cityFiltered: FormControl = new FormControl();

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.filteredAnimals = [...this.animals];
    const workers: Array<{ idn: number, valuen: string }> = [{ idn: 1, valuen: 'first' }, { idn: 2, valuen: 'second' }];
    const keys = Object.keys(workers[0]);
    const idText = keys[0];
    const valueText = keys[1];
    console.log(idText, valueText);

    const calcAnimals = workers.map(f => {
      const tempAnimal: IAnimal = { id: f[idText], value: f[valueText] };
      return tempAnimal;
    });

    console.log(this.cityFiltered.setValue([2, 4]));
    this.frmFilterTest = this.formBuilder.group({
      city: '',
      testFilter: []
    });


    this.cityFiltered.valueChanges.subscribe(() =>
      this.filterAnimals()
    );
  }

  writeValue(obj: Array<number>): void {
    this.frmFilterTest.get('city').setValue([obj]);
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  filterAnimals() {
    if (!this.animals) { return; }
    const search = this.cityFiltered.value;
    this.filteredAnimals = [...this.animals.filter(animal => animal.value.toLowerCase().includes(search.toLowerCase()))];
  }
}


// export const animals: Array<IAnimal> = new Array<IAnimal>(
//   { id: 1, value: 'Lion' },
//   { id: 2, value: 'Tiger' },
//   { id: 3, value: 'Eagle' },
//   { id: 4, value: 'Wolf' },
//   { id: 5, value: 'Elephant' },
//   { id: 6, value: 'Giraph' },
//   { id: 7, value: 'Hyena' },
// );

