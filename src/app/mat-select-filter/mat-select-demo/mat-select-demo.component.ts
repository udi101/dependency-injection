import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ISelectFilterOption } from './../select-filter-option.interface';

@Component({
  selector: 'app-mat-select-demo',
  templateUrl: './mat-select-demo.component.html',
  styleUrls: ['./mat-select-demo.component.scss']
})
export class MatSelectDemoComponent implements OnInit {
  animals: Array<ISelectFilterOption> = animals;
  frmAnimals: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.frmAnimals = this.formBuilder.group(
      { animals: ''}
    );
  }

}


export const animals: Array<ISelectFilterOption> = new Array<any>(
  { idl: 1, valuen: 'Lion' },
  { idl: 2, valuen: 'Tiger' },
  { idl: 3, valuen: 'Eagle' },
  { idl: 4, valuen: 'Wolf' },
  { idl: 5, valuen: 'Elephant' },
  { idl: 6, valuen: 'Giraph' },
  { idl: 7, valuen: 'Hyena' },
);
