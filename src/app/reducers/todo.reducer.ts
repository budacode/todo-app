import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as TodoActions from '../actions/todo.action';
import { Todo } from '../interfaces/todo.interface';

export interface State {
  todos: Todo[];
  skip: number;
  take: number;
}

const initialState: State = {
  todos: [],
  skip: 0,
  take: 5,
};
export function reducer(state: State = initialState, action: TodoActions.Actions): State {
  switch (action.type) {
    case TodoActions.DELETE_TODO_ACTION: {
      const index = state.todos.findIndex(todo => todo.id === action.payload);

      if(index < 0) {
        return {
          ...state,
        };
      } else {
        state.todos.splice(index, 1);

        return {
          ...state,
          todos: state.todos,
        };
      }
    }

    case TodoActions.UPDATE_TODO_ACTION: {
      let updateTodo = state.todos.find(todo => todo.id === action.payload.id);
      updateTodo = action.payload;

      return {
        ...state,
      };
    }

    case TodoActions.ADD_TODOS_ACTION: {
      return {
        ...state,
        /* todos: state.todos.concat(action.payload), */

        todos: Array.from(new Set([...state.todos, ...action.payload])).sort((a, b) => a.title.localeCompare(b.title)),

        /* todos: state.todos.concat(action.payload).sort((a, b) => a.title.localeCompare(b.title)), */
      };
    }
    default: {
      return state;
    }
  }
}
export const selectTodosState = createFeatureSelector<State>('todos');
export const selectTodos = createSelector(selectTodosState, (state: State) => state.todos);
export const selectTodo = (id: number) => createSelector(selectTodosState, (state: State) => {
  return state.todos.find(todo => todo.id === id);
});