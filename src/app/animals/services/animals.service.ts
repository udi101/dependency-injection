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
  { name: 'chimpanzee', family: 'apes' },
  { name: 'tiger', family: 'cats' },
  { name: 'eagle', family: 'birds' }
];
