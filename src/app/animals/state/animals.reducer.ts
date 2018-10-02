import { IAnimal } from '../interfaces/IAnimal.interface';
import * as fromRoot from './../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AnimalActions, AnimalActionTypes } from './animal.actions';

export interface IState extends fromRoot.IState {
  animals: IAnimalState;
}

export interface IAnimalState {
  displayAnimalFamily: boolean;
  currentAnimal: number;
  animals: Array<IAnimal>;
  error: string;
}


// =====================================================================
// Initializing the state of the store slice
// =====================================================================
const initialState: IAnimalState = {
  displayAnimalFamily: true,
  currentAnimal: 0,
  animals: [],
  error: ''
};

// =====================================================================
// There are 2 kinds of selectors:
// 1. createFeatureSelector which brings a whole slice of the state.
// 2. create selector which can build whatever state structure we need
// =====================================================================
const getAnimalFeatureState = createFeatureSelector<IAnimalState>('animals');
// Selector for displaying animal family
export const getAnimalsDiplayAnimalfamily = createSelector(
  getAnimalFeatureState,
  (state: IAnimalState): boolean => state.displayAnimalFamily
);
// Selector for the current animal id
export const getCurrentAnimalId = createSelector(
  getAnimalFeatureState,
  (state: IAnimalState): number => state.currentAnimal
);

export const getCurrentAnimal = createSelector(
  getAnimalFeatureState,
  (state: IAnimalState): IAnimal => state.animals.find(a => a.id === state.currentAnimal)
);

export const getAnimals = createSelector(
  getAnimalFeatureState,
  (state: IAnimalState): Array<IAnimal> => state.animals
);

export const getError = createSelector(
  getAnimalFeatureState,
  (state: IAnimalState): string => state.error
);



// =====================================================================
// This us the reducer function
// =====================================================================
export function reducer(state = initialState, action: AnimalActions): IAnimalState {
  switch (action.type) {
    case AnimalActionTypes.ToggleDisplayFamily:
      return {
        ...state,
        displayAnimalFamily: action.payload
      };
    case AnimalActionTypes.SetCurrentAnimal:
      return {
        ...state,
        currentAnimal: action.payload
      };
    case AnimalActionTypes.LoadSuccess:
      return {
        ...state,
        error: '',
        animals: [...action.payload]
      };

    case AnimalActionTypes.LoadFailure:
      return {
        ...state,
        animals: [],
        error: action.payload
      };

    default: return state;
  }
}
