import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as fromAnimal from './../state/animals.reducer';
import * as animalAction from './../state/animal.actions';
import { IAnimal } from '../interfaces/IAnimal.interface';

@Component({
  selector: 'current-animal',
  templateUrl: './current-animal.component.html',
  styleUrls: ['./current-animal.component.scss']
})
export class CurrentAnimalComponent implements OnInit {
  frmAnimal: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromAnimal.IState>) { }

  ngOnInit() {
    this.buildForm();
    this.store.pipe(select(fromAnimal.getCurrentAnimal))
      .subscribe(animal => this.frmAnimal.patchValue({
        id: animal && animal.id,
        name: animal && animal.name,
        family: animal && animal.family
      }));
  }

  buildForm() {
    this.frmAnimal = this.formBuilder.group({
      id: [null, Validators.required],
      name: ['', [Validators.required, Validators.minLength(2)]],
      family: ''
    });
  }

  updateAnimal() {
    const updatedAnimal: IAnimal = { ...this.frmAnimal.value };
    console.log(updatedAnimal);
    this.store.dispatch(new animalAction.UpdateAnimal(updatedAnimal));
  }
}
