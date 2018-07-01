
import { TodoService } from '../services/todo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State as RootState } from '../reducers/root.reducer';
import * as todosReducer from '../reducers/todo.reducer';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
    selector: 'app-todos',
    templateUrl: './todos.view.pug',
    styleUrls: ['./todos.view.scss'],
})

export class TodosView implements OnInit, OnDestroy {
    public todo: any = {
        title: '',
        completed: false,
    };
    public todos: any = [];

    constructor(private store: Store<RootState>, public todoService: TodoService) {
        //
    }

    public ngOnInit(): void {
        this.getTodos();
    }

    public getTodos(): void {
        this.store.select(todosReducer.selectTodos).subscribe((todos: any) => {
            if (todos.length === 0) {
                this.todoService.getTodos();
            } else {
                this.todos = todos;
            }
        });
    }

    public createTodo(): void {
        this.todoService.createTodo(this.todo);
    }

    public deleteTodo(id: number, title: string): void {
        const conf = confirm(`Are ou sure, you want to delete: ${title}?`);
        if (conf) {
            this.todoService.deleteTodo(id);
        }
    }

    public updateTodo(id: number): void {
        this.store.select(todosReducer.selectTodo(id)).subscribe(todo => {
            this.todo = todo;
        });
        this.todo.completed = !this.todo.completed;
        this.todoService.updateTodo(id, this.todo);
    }

    public showOptions(event: any, id: number): void {
        this.store.select(todosReducer.selectTodo(id)).subscribe(todo => {
            this.todo = todo;
        });
        this.todo.completed = event.checked;
        this.todoService.updateTodo(id, this.todo);
    }

    public addMoreTodo(): void {
        this.todoService.addMoreTodos();
    }

    public ngOnDestroy(): void {
        //
    }
}