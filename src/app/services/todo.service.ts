import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces/todo.interface';
import { Skip } from '../interfaces/skip.interface';

import { Store } from '@ngrx/store';
import { State as RootState } from '../reducers/root.reducer';
import { AddTodoAction, DeleteTodoAction, UpdateTodoAction } from '../actions/todo.action';
import { SkipTodoAction } from '../actions/skip.action';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class TodoService {
  private skip: number = 0;
  private take: number = 5;
  private skipSubscription: Subscription;
  private baseUrl: string = 'https://yellowroad-todo-crud.herokuapp.com';
  constructor(private httpClient: HttpClient, private store: Store<RootState>) {
    //
  }


  public createTodo(todo: any): void {
    this.httpClient.post(`${this.baseUrl}/create`, todo)
      .subscribe((todo: Todo) => {
        this.store.dispatch(new AddTodoAction([todo]));
      });
  }


  public getTodos(): void {
    this.httpClient.get(`${this.baseUrl}/?skip=${this.skip}&take=${this.take}`)
      .subscribe((todo: any) => {
        this.store.dispatch(new AddTodoAction(todo));
        this.store.dispatch(new SkipTodoAction(null));
        if (!this.skipSubscription) {
          this.skipSubscription = this.store.select('skip').subscribe((skip: any) => {
            this.skip = skip.skip;
          });
        }
      });
  }

  public deleteTodo(id: any): void {
    this.httpClient.delete(`${this.baseUrl}/${id}`)
      .subscribe(() => {
        this.store.dispatch(new DeleteTodoAction(id));
      });
  }
  public updateTodo(id: number, todo: any): void {
    this.httpClient.put(`${this.baseUrl}/${id}`, todo)
      .subscribe(data => {
        this.store.dispatch(new UpdateTodoAction(todo));
      });
  }



  public addMoreTodos(): void {
    this.getTodos();
  }
}
