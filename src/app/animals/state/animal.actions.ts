import { Action } from '@ngrx/store';

// Creating an enum of all available actions
export enum AnimalActionTypes {
    ToggleDisplayFamily = '[Animal] TOGGLE_DISPLAY_FAMILY',
    SetCurrentAnimal = '[Animal] SET_CURRENT_ANIMAL'
}


// Building a class for each of the actions
export class ToggleDisplayFamily implements Action {
    readonly type =  AnimalActionTypes.ToggleDisplayFamily;
    constructor(public payload: boolean) { }
}

export class SetCurrentAnimal implements Action {
    readonly type =  AnimalActionTypes.SetCurrentAnimal;
    constructor(public payload: number) { }
}


// Creating a type (union) so we could have a strongly typed actions
export type AnimalActions = ToggleDisplayFamily | SetCurrentAnimal;
