import { IAnimal } from '../interfaces/IAnimal.interface';
import * as fromRoot from './../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface IState extends fromRoot.IState {
    animals: IAnimalState;
}

export interface IAnimalState {
    displayAnimalFamily: boolean;
    currentAnimal: number;
    animals: Array<IAnimal>;
}


// =====================================================================
// Initializing the state of the store slice
// =====================================================================
const initialState: IAnimalState = {
    displayAnimalFamily: true,
    currentAnimal: 0,
    animals: []
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
export const getCurrentAnimal = createSelector(
    getAnimalFeatureState,
    (state: IAnimalState): number => state.currentAnimal
);

// =====================================================================
// This us the reducer function
// =====================================================================
export function reducer(state = initialState, action): IAnimalState {
    switch (action.type) {
        case 'TOGGLE_ANIMAL_FAMILY':
            return {
                ...state,
                displayAnimalFamily: action.payload
            };
        case 'SET_CURRENT_ANIMAL':
            return {
                ...state,
                currentAnimal: action.payload
            };
        default: return state;
    }
}
