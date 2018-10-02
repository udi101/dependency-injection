import { Action } from '@ngrx/store';
import { IAnimal } from '../interfaces/IAnimal.interface';

// Creating an enum of all available actions
export enum AnimalActionTypes {
    ToggleDisplayFamily = '[Animal] TOGGLE_DISPLAY_FAMILY',
    SetCurrentAnimal = '[Animal] SET_CURRENT_ANIMAL',
    Load = '[Animal] LOAD',
    LoadSuccess = '[Animal] LOAD_SUCCESS',
    LoadFailure = '[Animal] LOAD_FAILURE'
}


// Building a class for each of the actions
export class ToggleDisplayFamily implements Action {
    readonly type = AnimalActionTypes.ToggleDisplayFamily;
    constructor(public payload: boolean) { }
}

export class SetCurrentAnimal implements Action {
    readonly type = AnimalActionTypes.SetCurrentAnimal;
    constructor(public payload: number) { }
}

export class Load implements Action {
    readonly type = AnimalActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = AnimalActionTypes.LoadSuccess;
    constructor(public payload: Array<IAnimal>) { }
}
// this is the error action
export class LoadFailure implements Action {
    readonly type = AnimalActionTypes.LoadFailure;
    constructor(public payload: string) { }
}


// Creating a type (union) so we could have a strongly typed actions
export type AnimalActions = ToggleDisplayFamily |
    SetCurrentAnimal |
    Load |
    LoadSuccess |
    LoadFailure;
