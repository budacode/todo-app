import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as CategoriesActions from '../actions/categories.action';
import { Category } from '../interfaces/category.interface';

export interface State {
  categories: Category[];
}

const initialState: State = {
  categories: [],
};
export function reducer(state: State = initialState, action: CategoriesActions.Actions): State {
  switch (action.type) {
    case CategoriesActions.ADD_CATEGORY_ACTION: {
      state.categories.push(action.payload);

      return state;
    }
    default: {
      return state;
    }
  }
}
export const selectCategoriesState = createFeatureSelector<State>('categories');
// export const selectCars = createSelector(selectCarsState, (state: State) => state.cars);
// export const selectCar = (id: number) =>
//   createSelector(selectCarsState, (state: State) => {
//     return state.cars.find(car => car.id === id);
//   });