import { TodoDataService } from './../todo-data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() remove = new EventEmitter<Todo>();
  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
    console.log(this.todo);
  }

  completeTodo(): void {
    this.todo.completed = !this.todo.completed;
  }

  editTodo(): void {
    this.todo.editing = true;
  }

  updateTodo(title: string): void {
    this.stopEditing(title);
  }

  stopEditing(title: string): void {
    this.todo.title = title;
    this.todo.editing = false;
  }

  removeTodo(): void {
    this.remove.emit(this.todo);
  }



}
