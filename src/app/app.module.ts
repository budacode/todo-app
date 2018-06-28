import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { reducers } from './reducers/root.reducer';
import { AppRoutingModule } from './/app-routing.module';
import { TodosView } from './views/todos.view';

@NgModule({
  declarations: [
    AppComponent,
    TodosView,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot(reducers()),
    StoreDevtoolsModule.instrument({ maxAge: 100 }),
    AngularMaterialModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule { }
