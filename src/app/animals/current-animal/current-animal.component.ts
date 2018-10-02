import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as fromAnimal from './../state/animals.reducer';
import { IAnimal } from '../interfaces/IAnimal.interface';

@Component({
  selector: 'current-animal',
  templateUrl: './current-animal.component.html',
  styleUrls: ['./current-animal.component.scss']
})
export class CurrentAnimalComponent implements OnInit {
  frmAnimal: FormGroup;
  currentAnimalId: number;
  currentAnimal: IAnimal;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromAnimal.IState>) { }

  ngOnInit() {
    this.buildForm();
    // this.store.pipe(select(fromAnimal.getCurrentAnimal)).subscribe(animal => this.currentAnimal = animal);
    this.store.pipe(select(fromAnimal.getCurrentAnimal)).subscribe(animal => this.frmAnimal.patchValue({ id: animal && animal.id }));
  }

  buildForm() {
    this.frmAnimal = this.formBuilder.group({
      id: [null, Validators.required],
      name: '',
      family: ''
    });
  }
}
