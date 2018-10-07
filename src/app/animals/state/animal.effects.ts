import { Injectable } from '@angular/core';
import { map, catchError, switchMap, tap, mergeMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { AnimalService } from '../services/animal.service';
import * as animalsActions from './animal.actions';
import { IAnimal } from '../interfaces/IAnimal.interface';
import { Action } from '@ngrx/store';

@Injectable()
export class AnimalEffects {
  constructor(private actions$: Actions, private animalsService: AnimalService) { }

  @Effect()
  loadAnimals$: Observable<Action> = this.actions$.pipe(
    ofType(animalsActions.AnimalActionTypes.Load),
    switchMap((action: animalsActions.Load) => this.animalsService.animals$.pipe(
      map((animals: Array<IAnimal>) => (new animalsActions.LoadSuccess(animals))),
      catchError(err => of(new animalsActions.LoadFailure(err)))
    ))
  );

  @Effect()
  updateAnimal$: Observable<Action> = this.actions$.pipe(
    ofType(animalsActions.AnimalActionTypes.UpdateAnimal),
    mergeMap((action: animalsActions.UpdateAnimal) => this.animalsService.updateAnimal(<IAnimal>action.payload).pipe(
      map((animal: IAnimal) => new animalsActions.UpdateAnimalSuccess(animal)),
      catchError(err => of(new animalsActions.UpdateAnimalFailure(err)))
    ))
    //  of(new animalsActions.UpdateAnimalSuccess(<IAnimal>{})))
  );

  @Effect()
  deleteAnimal$: Observable<Action> = this.actions$.pipe(
    ofType(animalsActions.AnimalActionTypes.DeleteAnimal),
    switchMap((action: animalsActions.DeleteAnimal) => this.animalsService.deleteAnimal(action.payload).pipe(
      map((animalId: number) => new animalsActions.DeleteAnimalSuccess(animalId))
    ))
    );

}

