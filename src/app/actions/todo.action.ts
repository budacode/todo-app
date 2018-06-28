import { Action } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION';
export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION';
export const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION';

export class AddTodoAction implements Action {
    // tslint:disable-next-line
    public readonly type = ADD_TODO_ACTION;
    constructor(public payload: Todo[]) { }
}

export class DeleteTodoAction implements Action {
    // tslint:disable-next-line
    public readonly type = DELETE_TODO_ACTION;
    constructor(public payload: string) { }
}

export class UpdateTodoAction implements Action {
    // tslint:disable-next-line
    public readonly type = UPDATE_TODO_ACTION;
    constructor(public payload: Todo) { }
}

export type Actions =
    | AddTodoAction
    | UpdateTodoAction
    | DeleteTodoAction;