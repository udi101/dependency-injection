import { IAnimal } from '../interfaces/IAnimal.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAnimalState } from './animals.reducer';
import * as fromRoot from 'src/app/state/app.state';

export interface IState extends fromRoot.IState {
    animals: IAnimalState;
  }


// =====================================================================
// SELECTORS
// There are 2 kinds of selectors:
// 1. createFeatureSelector which brings a whole slice of the state.
// 2. create selector which can build whatever state structure we need
// =====================================================================

// the feature selector
const getAnimalFeatureState = createFeatureSelector<IAnimalState>('animals');

// Selector for displaying animal family
export const getAnimalsDiplayAnimalfamily = createSelector(
    getAnimalFeatureState,
    (state: IAnimalState): boolean => state.displayAnimalFamily
);

// Selector for the current animal id
export const getCurrentAnimalId = createSelector(
    getAnimalFeatureState,
    (state: IAnimalState): number => state.currentAnimalId
);

// get current animal - Composition of 2 selectors
export const getCurrentAnimal = createSelector(
    getAnimalFeatureState,
    getCurrentAnimalId,
    (state: IAnimalState, animalId: number): IAnimal => animalId ? state.animals.find(a => a.id === animalId) : null
);

// getting the list of all animals
export const getAnimals = createSelector(
    getAnimalFeatureState,
    (state: IAnimalState): Array<IAnimal> => state.animals
);

// getting the error message
export const getError = createSelector(
    getAnimalFeatureState,
    (state: IAnimalState): string => state.error
);

