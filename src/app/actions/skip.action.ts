import { Action } from '@ngrx/store';
import { Skip } from '../interfaces/skip.interface';

export const SKIP_TODO_ACTION = 'SKIP_TODO_ACTION';

export class SkipTodoAction implements Action {
    public readonly type: string = SKIP_TODO_ACTION;
    constructor(public payload: number) { }
}

export type Actions =
    | SkipTodoAction;