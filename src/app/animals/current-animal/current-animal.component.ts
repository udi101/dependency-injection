import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as fromAnimal from './../state/animals.reducer';
import * as animalActions from './../state/animal.actions';
import { IAnimal } from '../interfaces/IAnimal.interface';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'current-animal',
  templateUrl: './current-animal.component.html',
  styleUrls: ['./current-animal.component.scss']
})
export class CurrentAnimalComponent implements OnInit, OnDestroy {
  frmAnimal: FormGroup;
  componentActive = true;
  totalAnimalCount: number;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromAnimal.IState>) { }

  ngOnInit() {
    this.buildForm();
    this.store.pipe(select(fromAnimal.getCurrentAnimal),
      takeWhile(() => this.componentActive))
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
    this.store.dispatch(new animalActions.UpdateAnimal(updatedAnimal));
  }

  deleteAnimal() {
    const animalToDelete: IAnimal = { ...this.frmAnimal.value };
    this.store.dispatch(new animalActions.DeleteAnimal(this.frmAnimal.get('id').value));
  }
  saveNewAnimal() {
    console.log({ ...this.frmAnimal.value, id: 0 });
    this.store.dispatch((new animalActions.SaveNewAnimal({ ...this.frmAnimal.value, id: 0 })));
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
