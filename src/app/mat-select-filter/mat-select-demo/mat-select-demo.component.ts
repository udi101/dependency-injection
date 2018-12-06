import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { IAnimal } from 'src/app/mat-select-filter/interfaces/animal.interface';

@Component({
  selector: 'app-mat-select-demo',
  templateUrl: './mat-select-demo.component.html',
  styleUrls: ['./mat-select-demo.component.scss']
})
export class MatSelectDemoComponent implements OnInit {
  animals: Array<IAnimal> = animals;
  frmAnimals: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.frmAnimals = this.formBuilder.group(
      { animals: '' }
    );
  }

}


export const animals: Array<IAnimal> = new Array<IAnimal>(
  { id: 1, value: 'Lion' },
  { id: 2, value: 'Tiger' },
  { id: 3, value: 'Eagle' },
  { id: 4, value: 'Wolf' },
  { id: 5, value: 'Elephant' },
  { id: 6, value: 'Giraph' },
  { id: 7, value: 'Hyena' },
);
