import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAnimal from './../state/animals.reducer';
import { IAnimal } from '../interfaces/IAnimal.interface';

@Component({
  selector: 'current-animal',
  templateUrl: './current-animal.component.html',
  styleUrls: ['./current-animal.component.scss']
})
export class CurrentAnimalComponent implements OnInit {
  currentAnimalId: number;
  currentAnimal: IAnimal;
  constructor(private store: Store<fromAnimal.IState>) { }

  ngOnInit() {
    this.store.pipe(select(fromAnimal.getCurrentAnimalId)).subscribe(animalId => this.currentAnimalId = animalId);
    this.store.pipe(select(fromAnimal.getCurrentAnimal)).subscribe(animal => this.currentAnimal = animal);
  }

}
