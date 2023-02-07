import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@inettech/api-interfaces';

@Component({
  selector: 'inettech-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Todo[]>('/api/todo').subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }
}
