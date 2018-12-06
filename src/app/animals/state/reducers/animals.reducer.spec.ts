import { animalReducer, IAnimalState } from './animals.reducer';
import * as animalActions from './../animal.actions';

describe('animalReducer', () => {
  describe('toggleDisplayFamily', () => {
    it('sholud turn displayFamily to true', () => {
      const expectedResult: IAnimalState = {
        animals: [
          { id: 1, name: 'lion', family: 'cats' },
          { id: 2, name: 'giraph', family: 'giraphs' }
        ],
        currentAnimalId: null,
        displayAnimalFamily: true,
        error: ''
      };
      const action = new animalActions.ToggleDisplayFamily(true);
      const result = animalReducer(currentAnimalstate, action);
      console.log(currentAnimalstate);
      console.log(result);
      expect(result).toEqual(expectedResult);
    });

    it('Should select lion as currentAnimal', () => {
      const action = new animalActions.SetCurrentAnimal(1);
      const expectedResult: IAnimalState = { ...currentAnimalstate, animals: [...currentAnimalstate.animals], currentAnimalId: 1 };
      const result = animalReducer(currentAnimalstate, action);
      expect(result).toEqual(expectedResult);
    });

    it('Should update an animal ', () => {
      const action = new animalActions.UpdateAnimalSuccess({ id: 1, name: 'udi', family: 'mazor' });
      const expectedResult: IAnimalState = {
        ...currentAnimalstate,
        animals: [
          { id: 1, name: 'udi', family: 'mazor' },
          { id: 2, name: 'giraph', family: 'giraphs' }
        ]
      };
      const result = animalReducer(currentAnimalstate, action);
      expect(result).toEqual(expectedResult);
    });

  });
});

const currentAnimalstate: IAnimalState = {
  animals: [
    { id: 1, name: 'lion', family: 'cats' },
    { id: 2, name: 'giraph', family: 'giraphs' }
  ],
  currentAnimalId: null,
  displayAnimalFamily: false,
  error: ''
};
