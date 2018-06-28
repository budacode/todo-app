import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces/todo.interface';
import { Skip } from '../interfaces/skip.inteface';

import { Store } from '@ngrx/store';
import { State as RootState } from '../reducers/root.reducer';
import { AddTodosAction, DeleteTodoAction, UpdateTodoAction } from '../actions/todo.action';
import { SkipTodoAction } from '../actions/skip.action';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class TodoService {
    private skip: number = 0;
    private take: number = 5;
    private skipSubscription: Subscription;
  constructor(private httpClient: HttpClient, private store: Store<RootState>) {
  }
  public createTodo(todo: any): void {
    this.httpClient.post('https://yellowroad-todo-crud.herokuapp.com/create', todo)
      .subscribe((todo: Todo) => {
        this.store.dispatch(new AddTodosAction([todo]));
      });
  }


  public getTodos(): void {
    this.httpClient.get(`https://yellowroad-todo-crud.herokuapp.com/?skip=${this.skip}&take=${this.take}`)
      .subscribe((todos: Todo[]) => {
        this.store.dispatch(new AddTodosAction(todos));
        this.store.dispatch(new SkipTodoAction(null));
        if(!this.skipSubscription) {
          this.skipSubscription = this.store.select('skip').subscribe((skip: any) => {
            this.skip = skip.skip;
            /* console.log(this.skip); */
          });
        }
      });
  }

  public deleteTodo(id: number): void {
    this.httpClient.delete(`https://yellowroad-todo-crud.herokuapp.com/${id}`)
      .subscribe(() => {
        this.store.dispatch(new DeleteTodoAction(id));
       });
  }
  public updateTodo(id: number, todo: any): void {
    this.httpClient.put(`https://yellowroad-todo-crud.herokuapp.com/${id}`, todo)
      .subscribe(data => {
        this.store.dispatch(new UpdateTodoAction(todo));
      });
  }

  public addMoreTodos(): void {
    this.getTodos();
  }
}
