import { Component, OnInit, OnDestroy } from '@angular/core';

import { IAnimal } from './interfaces/IAnimal.interface';
import { AnimalService } from './services/animal.service';

// NgRx
import * as fromAnimal from './state/animals.reducer';
import * as animalActions from './state/animal.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit, OnDestroy {
  componentActive = true;
  displayAnimalFamily: boolean;
  currentAnimalId = 0;
  animals: Array<IAnimal> = new Array<IAnimal>();
  animals$: Observable<Array<IAnimal>>;
  displayColumns = ['name', 'family', 'current'];

  constructor(private animalService: AnimalService,
    private store: Store<fromAnimal.IState>) { }

  ngOnInit() {
    // This will be listened by our effect
    this.store.dispatch(new animalActions.Load());

    // This is the pipe async approach vs the subscribe approach
    this.animals$ = this.store.pipe(select(fromAnimal.getAnimals));
    // this.store.pipe(select(fromAnimal.getAnimals)).subscribe((animals: Array<IAnimal>) => this.animals = animals);

    // registering the store state
    this.store.pipe(
      select(fromAnimal.getAnimalsDiplayAnimalfamily),
      takeWhile(() => this.componentActive)).subscribe(
        displayAnimalFamily => {
          this.displayAnimalFamily = displayAnimalFamily;
        }
      );
    this.store.pipe(
      select(fromAnimal.getCurrentAnimalId),
      takeWhile(() => this.componentActive))
      .subscribe((currentAnimalId: number) => this.currentAnimalId = currentAnimalId
      );
  }

  isCurrentAnimal(animalId: number): boolean {
    return animalId === this.currentAnimalId;
  }

  changeDisplay(e: boolean) {
    this.store.dispatch(new animalActions.ToggleDisplayFamily(e));
  }

  setCurrentAnimal(animalId: number) {
    this.store.dispatch(new animalActions.SetCurrentAnimal(animalId));
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}


