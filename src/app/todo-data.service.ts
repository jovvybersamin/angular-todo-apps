import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId: number = 0;
  todos: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo | string): void {

    console.log(typeof todo);

    if (typeof todo === 'string') {
      todo = new Todo({
        'id' : 0,
        'title' : todo,
        'completed' : false
      });
    }

    if (!todo.id) {
      todo.id = ++this.lastId;
    }

    this.todos.push(todo);
  }

  clearCompleted(): any {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  removeTodo(todo: Todo): void {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  getAll(): Todo[] {
    return this.todos;
  }

  getRemaining(): Todo[] {
    return this.todos.filter(todo => !todo.completed);
  }

  getCompleted(): Todo[] {
    return this.todos.filter(todo => todo.completed);
  }
  markAllAsCompleted(completed: boolean): void {
    this.todos.forEach(todo => todo.completed = completed);
  }

}
