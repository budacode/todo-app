import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as TodoActions from '../actions/todo.action';
import { Todo } from '../interfaces/todo.interface';

export interface State {
    todo: any;
    skip: number;
    take: number;
}

const initialState: State = {
    todo: [],
    skip: 0,
    take: 5,
};
export function reducer(state: State = initialState, action: TodoActions.Actions): State {
    switch (action.type) {
        case TodoActions.DELETE_TODO_ACTION: {
            const index = state.todo.findIndex(todo => todo.id === action.payload);

            if (index < 0) {
                return {
                    ...state,
                };
            } else {
                state.todo.splice(index, 1);

                return {
                    ...state,
                    todo: state.todo,
                };
            }
        }

        case TodoActions.UPDATE_TODO_ACTION: {
            let updateTodo = state.todo.find(todo => todo.id === action.payload.id);
            updateTodo = action.payload;

            return {
                ...state,
            };
        }
        case TodoActions.ADD_TODO_ACTION: {
            const set1 = new Set([...state.todo, ...action.payload]);
            const forSort = Array.from(set1).sort((a, b) => {
                return a.title.localeCompare(b.title);
            });

            return {
                ...state,
                todo: forSort,
            };
        }
        default: {
            return state;
        }
    }
}
export const selectTodoState = createFeatureSelector<State>('todo');
export const selectTodos = createSelector(selectTodoState, (state: State) => state.todo);
export const selectTodo = (id: number) => createSelector(selectTodoState, (state: State) => {
    return state.todo.find(todo => todo.id === id);
});