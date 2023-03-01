import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@inettech/api-interfaces';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'inettech-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  apiUrl = '';
  todos: Todo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.apiUrl = environment.BACKEND_URL + '/todo';
    console.log('apiUrl =', this.apiUrl);
    this.http.get<Todo[]>(this.apiUrl).subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }
}
