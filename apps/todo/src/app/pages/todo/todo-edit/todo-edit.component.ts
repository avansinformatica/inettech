import { Component, OnInit } from '@angular/core';
import { Todo } from '@inettech/api-interfaces';

@Component({
  selector: 'inettech-todoapp-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  newTodo: Todo | undefined = undefined;

  constructor() {
    // handle dependency injection
  }

  ngOnInit(): void {
    // initialization
    this.newTodo = {
      id: 0,
      title: '',
      completed: false,
    };
  }

  onSubmit() {
    // handle submitting of a new todo
  }
}
