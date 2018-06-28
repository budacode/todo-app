import { ActionReducerMap } from '@ngrx/store';
import * as TodoReducer from './todo.reducer';
import * as SkipReducer from './skip.reducer';

export interface State {
  todos: TodoReducer.State;
  skip: SkipReducer.State;
}
export function reducers(): ActionReducerMap<State> {
  return {
    todos: TodoReducer.reducer,
    skip: SkipReducer.reducer,
  };
}