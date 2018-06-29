import { ActionReducerMap } from '@ngrx/store';
import * as CategoriesReducer from './categories.reducer';

export interface State {
  categories: CategoriesReducer.State;
}
export function reducers(): ActionReducerMap<State> {
  return {
    categories: CategoriesReducer.reducer,
  };
}