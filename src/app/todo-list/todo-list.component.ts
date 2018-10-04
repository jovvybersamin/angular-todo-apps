import { TodoDataService } from './../todo-data.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private visibility = 'All';

  allDone = false;
  todos: Todo[];

  constructor(public todoDataService: TodoDataService) { }

  ngOnInit() {
    this.getTodos();
  }
  getTodos(): any {
    this.todos = this.todoDataService.getAll();
  }

  addTodo(title: string): void {
    if (title.trim() !== '') {
      this.todoDataService.addTodo(title);
    }
  }

  removeTodo(todo: Todo): void {
    this.todoDataService.removeTodo(todo);
    this.onVisibilityChange(this.visibility);
  }

  clearCompleted(): void {
    this.todoDataService.clearCompleted();
    this.getTodos();
  }

  toggleAll(): void {
    this.allDone = !this.allDone;
    this.todoDataService.markAllAsCompleted(this.allDone);
  }

  onVisibilityChange(visibility: string): void {
    this.visibility = visibility;
    switch (this.visibility) {
      case 'All':
      this.todos = this.todoDataService.getAll();
      break;
      case 'Active':
      this.todos = this.todoDataService.getRemaining();
      break;
      case 'Completed':
      this.todos = this.todoDataService.getCompleted();
      break;
    }
  }
}
