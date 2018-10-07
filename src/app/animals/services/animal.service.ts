import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { IAnimal } from '../interfaces/IAnimal.interface';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  displayAnimalFamily = false;
  private animals: BehaviorSubject<Array<IAnimal>> = new BehaviorSubject<Array<IAnimal>>(animals);
  animals$ = this.animals.asObservable();
  constructor() { }

  getAnimals(): Array<IAnimal> {
    return animals;
  }

  updateAnimal(animal: IAnimal) {
    console.log(animal);
    return of(animal);
  }

  deleteAnimal(animalId: number) {
    console.log('Deleteing animal number ' + animalId);
    return of(animalId);
  }
}

export const animals: Array<IAnimal> = [
  { id: 1, name: 'Chimpanzee', family: 'Apes' },
  { id: 2, name: 'Tiger', family: 'Cates' },
  { id: 3, name: 'Eagle', family: 'Birds' }
];
