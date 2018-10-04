import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { TodofilterComponent } from './todofilter/todofilter.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoitemComponent,
    TodofilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
