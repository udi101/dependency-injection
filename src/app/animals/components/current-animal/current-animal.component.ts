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
  private selectedAnimal = <IAnimal>{};

  @Input('selectedAnimal') set currentAnimal(animal: IAnimal) {
    this.selectedAnimal = animal;
    if (!this.frmAnimal) { return; }
    this.frmAnimal.setValue({
      id: animal && animal.id,
      name: animal && animal.name,
      family: animal && animal.family
    });
  }
  @Output() update: EventEmitter<IAnimal> = new EventEmitter<IAnimal>();
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() addAnimal: EventEmitter<IAnimal> = new EventEmitter<IAnimal>();
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.frmAnimal = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(2)]],
      family: ''
    });
  }

  updateAnimal() {
    const updatedAnimal: IAnimal = { ...this.frmAnimal.value };
    this.update.emit(updatedAnimal);
  }

  deleteAnimal() {
    console.log(`deleting animal no. ${this.selectedAnimal.id} `);
    this.delete.emit(this.selectedAnimal.id);
  }

  addNewAnimal() {
    this.addAnimal.emit({ ...this.frmAnimal.value, id: 0 });
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
