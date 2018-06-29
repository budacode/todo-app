import { Action } from '@ngrx/store';
import { Category } from '../interfaces/category.interface';

export const ADD_CATEGORY_ACTION = 'ADD_CATEGORY_ACTION';

export class AddCategoryAction implements Action {
  public readonly type: string = ADD_CATEGORY_ACTION;
  constructor(public payload: Category) { }
}

export type Actions =
  | AddCategoryAction;