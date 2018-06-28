import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodosView } from './views/todos.view';

const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodosView },
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
