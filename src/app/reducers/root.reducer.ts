import { ActionReducerMap } from '@ngrx/store';
import * as TodoReducer from './todo.reducer';
import * as SkipReducer from './skip.reducer';

export interface State {
    todo: TodoReducer.State;
    skip: SkipReducer.State;
}
export function reducers(): ActionReducerMap<State> {
    return {
        todo: TodoReducer.reducer,
        skip: SkipReducer.reducer,
    };
}