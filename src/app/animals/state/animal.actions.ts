import { Action } from '@ngrx/store';

// ======================================================
// Define the actions types as names constants
// ======================================================
export enum AnimalActionTypes {
    ToggleAnimalFamily = '[Animal] TOGGLE_ANIMAL_FAMILY',
    SetCurrentAnimal = '[Animal] SET_CURRENT_ANIMAL'
}

// ======================================================
// Build the action creators
// ======================================================
export class ToggleAnimalFamily implements Action {
    readonly type: AnimalActionTypes.ToggleAnimalFamily;
    constructor(public payload: boolean) { }

}
export class SetCurrentAnimal implements Action {
    readonly type: AnimalActionTypes.SetCurrentAnimal;
    constructor(public payload: number) { }
}

// ======================================================
// Define a union type for those action creators
// ======================================================
export type AnimalActions = ToggleAnimalFamily | SetCurrentAnimal;
