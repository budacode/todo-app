import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.view.pug',
  styleUrls: ['./create-todo.view.scss'],
})

export class CreateTodoView {
  public todo: any = {
    title: '',
    completed: false,
    createdAt: '',
  };
  constructor(public todoService: TodoService) {
    //
  }

  public createTodo(): void {
    this.todoService.createTodo(this.todo);
  }
}