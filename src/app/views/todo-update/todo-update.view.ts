import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Store } from '@ngrx/store';
import { State as RootState } from '../../reducers/root.reducer';
import * as todosReducer from '../../reducers/todo.reducer';
import { Todo } from '../../interfaces/todo.interface';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.view.pug',
  styleUrls: ['./todo-update.view.scss'],
})

export class TodoUpdateView {
  public todo: Todo = null;
  private updatedTodo: any = {
  title: '',
  completed: false,
  };
  private todosSubscription: Subscription;
  constructor(private store: Store<RootState>, private todoService: TodoService, private route: ActivatedRoute) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.select(todosReducer.selectTodo(id)).subscribe(todo => {
      this.todo = todo;
      this.updatedTodo = todo;
    });
  }
  public updateTodo(id: number): void {
      this.todoService.updateTodo(id, this.updatedTodo);
    }

    public ngOnDestroy(): void {
      this.todosSubscription.unsubscribe();
    }
}