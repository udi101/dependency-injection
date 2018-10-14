import { IAnimal } from '../interfaces/IAnimal.interface';
import { AnimalActions, AnimalActionTypes } from './animal.actions';


// Interface of the Animal's feature state
export interface IAnimalState {
  displayAnimalFamily: boolean;
  currentAnimalId: number | null;
  animals: Array<IAnimal>;
  error: string;
}

// =====================================================================
// Initializing the state of the store slice
// =====================================================================
const initialState: IAnimalState = {
  displayAnimalFamily: true,
  currentAnimalId: null,
  animals: [],
  error: ''
};


// =====================================================================
// Reducer
// =====================================================================
export function animalReducer(state = initialState, action: AnimalActions): IAnimalState {
  switch (action.type) {

    case AnimalActionTypes.SaveNewAnimalSuccess:
      const newAnimal: IAnimal = { ...action.paylod, id: action.paylod.id };
      return { ...state, animals: [...state.animals, newAnimal] };

    case AnimalActionTypes.ToggleDisplayFamily:
      return {
        ...state,
        displayAnimalFamily: action.payload
      };

    case AnimalActionTypes.SetCurrentAnimal:
      return {
        ...state,
        currentAnimalId: action.payload
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

    case AnimalActionTypes.UpdateAnimalSuccess:
      let updatedAnimals = state.animals.map(
        animal => animal.id === action.payload.id ? action.payload : animal);
      return {
        ...state,
        animals: updatedAnimals
      };

    case AnimalActionTypes.DeleteAnimalSuccess:
      updatedAnimals = [...state.animals];
      updatedAnimals.splice(updatedAnimals.findIndex(a => a.id === action.payload), 1);
      return {
        ...state,
        animals: updatedAnimals,
        currentAnimalId: null
        // currentAnimalId: updatedAnimals[0] && updatedAnimals[0].id
      };

    default: return state;
  }
}
