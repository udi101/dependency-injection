import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IAnimal } from './../interfaces/IAnimal.interface';
@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  displayAnimalFamily = false;
  private animals: BehaviorSubject<Array<IAnimal>> = new BehaviorSubject<Array<IAnimal>>(animals);
  animals$ = this.animals.asObservable();
  constructor() { }
}


export const animals: Array<IAnimal> = [
  { id: 1, name: 'chimpanzee', family: 'Apes' },
  { id: 2, name: 'tiger', family: 'Cates' },
  { id: 3, name: 'eagle', family: 'Birds' }
];
