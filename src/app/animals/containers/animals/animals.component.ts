import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { IAnimal } from '../../interfaces/IAnimal.interface';
import { AnimalService } from '../../services/animal.service';

// NgRx
import * as fromAnimal from '../../state';
import * as animalActions from '../../state/animal.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalsComponent implements OnInit, OnDestroy {
  componentActive = true;
  displayAnimalFamily: boolean;
  currentAnimalId = 0;
  animals: Array<IAnimal> = new Array<IAnimal>();
  animals$: Observable<Array<IAnimal>>;
  currentAnimal$: Observable<IAnimal>;
  displayAnimalFamily$: Observable<boolean>;

  displayColumns = ['name', 'family', 'current'];


  constructor(private animalService: AnimalService,
    private store: Store<fromAnimal.IState>) { }

  ngOnInit() {

    // This will be listened by our effect
    this.store.dispatch(new animalActions.Load());
    this.currentAnimal$ = this.store.pipe(select(fromAnimal.getCurrentAnimal));
    this.animals$ = this.store.pipe(select(fromAnimal.getAnimals));
    this.displayAnimalFamily$ = this.store.pipe(select(fromAnimal.getAnimalsDiplayAnimalfamily));

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

  updateAnimal(animal: IAnimal) {
    this.store.dispatch(new animalActions.UpdateAnimal(animal));
  }

  deleteAnimal(animalId: number) {
    this.store.dispatch(new animalActions.DeleteAnimal(animalId));
  }

  addNewAnimal(animal: IAnimal) {
    this.store.dispatch((new animalActions.SaveNewAnimal(animal)));
    console.log(animal);
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
