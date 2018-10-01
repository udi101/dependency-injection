import { Injectable } from '@angular/core';
import { mergeMap, map } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { AnimalService } from '../services/animal.service';
import * as animalsActions from './animal.actions';
import { IAnimal } from '../interfaces/IAnimal.interface';

@Injectable()
export class AnimalEffects {
    constructor(private actions$: Actions, private animalsService: AnimalService) { }

    @Effect()
    loadAnimals$ = this.actions$.pipe(
        ofType(animalsActions.AnimalActionTypes.Load),
        mergeMap((action: animalsActions.Load) => this.animalsService.animals$.pipe(
            map((animals: Array<IAnimal>) => (new animalsActions.LoadSuccess(animals)))
        ))
    );

}

