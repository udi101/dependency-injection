import { Action } from '@ngrx/store';
import { IAnimal } from '../interfaces/IAnimal.interface';

// Creating an enum of all available actions
export enum AnimalActionTypes {
  ToggleDisplayFamily = '[Animal] Toogle Display Family',
  SetCurrentAnimal = '[Animal] Set Current Animal',
  Load = '[Animal] Load',
  LoadSuccess = '[Animal] Load Success',
  LoadFailure = '[Animal] Load Failure',
  UpdateAnimal = '[Animal] Update Animal',
  UpdateAnimalSuccess = '[Animal] Update Animal Success',
  UpdateAnimalFailure = '[Animal] Update Animal Failure',
  DeleteAnimal = '[Animal] Delete Animal',
  DeleteAnimalSuccess = '[Animal] Delete Animal Success',
  DeleteAnimalFailure = '[Animal] Delete Animal Failure'
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

export class UpdateAnimal implements Action {
  readonly type = AnimalActionTypes.UpdateAnimal;
  constructor(public payload: IAnimal) { }
}

export class UpdateAnimalSuccess implements Action {
  readonly type = AnimalActionTypes.UpdateAnimalSuccess;
  constructor(public payload: IAnimal) { }
}

export class UpdateAnimalFailure implements Action {
  readonly type = AnimalActionTypes.UpdateAnimalFailure;
  constructor(public payload: string) { }
}

export class DeleteAnimal implements Action {
  readonly type = AnimalActionTypes.DeleteAnimal;
  constructor(public payload: number) { }
}

export class DeleteAnimalSuccess implements Action {
  readonly type = AnimalActionTypes.DeleteAnimalSuccess;
  constructor(public payload: number) { }
}

export class DeleteAnimalFailure implements Action {
  readonly type = AnimalActionTypes.DeleteAnimalFailure;
  constructor(public payload: string) { }
}

// Creating a type (union) so we could have a strongly typed actions
export type AnimalActions =
  ToggleDisplayFamily |
  SetCurrentAnimal |
  Load |
  LoadSuccess |
  LoadFailure |
  UpdateAnimal |
  UpdateAnimalSuccess |
  UpdateAnimalFailure |
  DeleteAnimal |
  DeleteAnimalSuccess |
  DeleteAnimalFailure;
