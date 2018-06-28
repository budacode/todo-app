import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoListView, CreateTodoView, TodoUpdateView } from './views';

const routes: Routes = [
  { path: 'todo-list', component: TodoListView },
  { path: 'create-todo', component: CreateTodoView },
  { path: 'todo-update/:id', component: TodoUpdateView },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [],
})
export class AppRoutingModule { }
