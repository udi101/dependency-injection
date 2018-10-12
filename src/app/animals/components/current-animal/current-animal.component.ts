import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
// import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import * as fromAnimal from './../../state/animals.reducer';
// import * as animalActions from './../../state/animal.actions';
import { IAnimal } from '../../interfaces/IAnimal.interface';
// import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'current-animal',
  templateUrl: './current-animal.component.html',
  styleUrls: ['./current-animal.component.scss']
})

export class CurrentAnimalComponent implements OnInit, OnDestroy {
  frmAnimal: FormGroup;
  componentActive = true;
  totalAnimalCount: number;

  @Input()
  set currentAnimal(animal: IAnimal) {
    if (!this.frmAnimal) { return; }
    this.frmAnimal.setValue({
      id: animal.id,
      name: animal.name,
      family: animal.family
    });
  }

  @Output() update: EventEmitter<IAnimal> = new EventEmitter<IAnimal>();
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() saveNewAnimal: EventEmitter<IAnimal> = new EventEmitter<IAnimal>();
  constructor(
    private formBuilder: FormBuilder
    // ,private store: Store<fromAnimal.IState>
  ) { }

  ngOnInit() {
    console.log(this.currentAnimal);
    this.buildForm();
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
    this.update.emit(updatedAnimal);
  }

  deleteAnimal() {
    const animalToDelete: IAnimal = { ...this.frmAnimal.value };

    // this.store.dispatch(new animalActions.DeleteAnimal(this.frmAnimal.get('id').value));
  }
  saveNewAnimalf() {
    console.log({ ...this.frmAnimal.value, id: 0 });
    // this.store.dispatch((new animalActions.SaveNewAnimal({ ...this.frmAnimal.value, id: 0 })));
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
