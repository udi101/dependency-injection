import { IAnimal } from '../interfaces/IAnimal.interface';
import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromAnimals from './reducers/animals.reducer';
import * as fromBirds from './reducers/birds.reducer';

import { getRouterState } from 'src/app/state/reducers';

export interface IState {
    animals: fromAnimals.IAnimalState;
    birds: fromBirds.IBirdState;
}

export const reducers: ActionReducerMap<IState> = {
    animals: fromAnimals.animalReducer,
    birds: fromBirds.birdReducer
};

// =====================================================================
// SELECTORS
// There are 2 kinds of selectors:
// 1. createFeatureSelector which brings a whole slice of the state.
// 2. create selector which can build whatever state structure we need
// =====================================================================

// the feature selector
const getAnimalFeatureState = createFeatureSelector<IState>('animals');

// Selector for displaying animal family
export const getAnimalsDiplayAnimalfamily = createSelector(
    getAnimalFeatureState,
    (state: IState): boolean => state.animals.displayAnimalFamily
);

// Getting the router url
export const getRouterUrl = createSelector(
    getRouterState,
    (router) => router.state.url
);

// Selector for the current animal id
export const getCurrentAnimalId = createSelector(
    getAnimalFeatureState,
    (state: IState): number => state.animals.currentAnimalId
);

// get current animal - Composition of 2 selectors
export const getCurrentAnimal = createSelector(
    getAnimalFeatureState,
    getCurrentAnimalId,
    (state: IState, animalId: number): IAnimal => animalId ? state.animals.animals.find(a => a.id === animalId) : null
);

// getting the list of all animals
export const getAnimals = createSelector(
    getAnimalFeatureState,
    (state: IState): Array<IAnimal> => state.animals.animals
);

// getting the error message
export const getError = createSelector(
    getAnimalFeatureState,
    (state: IState): string => state.animals.error
);

