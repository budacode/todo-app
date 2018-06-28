import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Store } from '@ngrx/store';
import { State as RootState } from '../../reducers/root.reducer';
import * as todosReducer from '../../reducers/todo.reducer';
import { Todo } from '../../interfaces/todo.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.view.pug',
  styleUrls: ['./todo-list.view.scss'],
})

export class TodoListView implements OnInit, OnDestroy {
  public todo: any = {
    title: '',
    completed: false,
    createdAt: '',
  };
  public todos: Todo[] = [];
  public todosSubscription: Subscription;
  constructor(private store: Store<RootState>, private todoService: TodoService) {

  }

  public getTodos(): void {
    this.todosSubscription = this.store.select(todosReducer.selectTodos).subscribe((todos: Todo[]) => {
      if (todos.length === 0) {
        this.todoService.getTodos();
      } else {
        this.todos = todos;
      }
    });
  }

  public addMoreTodo(): void {
    this.todoService.addMoreTodos();
  }

  public deleteTodo(id: number, title: string): void {
    const conf = confirm(`Are ou sure, you want to delete: ${title}?`);
    if (conf) {
      this.todoService.deleteTodo(id);
    }
  }
  public createTodo(): void {
    this.todoService.createTodo(this.todo);
  }
  public updateTodo(todo: any): void {
    this.todoService.updateTodo(todo.id, todo);
  }
  public show(event: any, todo: any): void {
    this.todo.completed = event.checked;
    this.updateTodo(todo);
  }

  public ngOnInit(): void {
    this.getTodos();
  }
  public ngOnDestroy(): void {
    if (this.todosSubscription) {
      this.todosSubscription.unsubscribe();
    }
  }

}