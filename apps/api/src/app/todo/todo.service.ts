import { Injectable } from '@nestjs/common';
import { Todo } from '@inettech/api-interfaces';

@Injectable()
export class TodoService {
  todos: Todo[] = [
    {
      id: 0,
      title: 'Boodschappen doen',
      completed: false,
    },
    {
      id: 1,
      title: 'Huiswerk maken',
      completed: true,
    },
  ];

  getAll(): Todo[] {
    return this.todos;
  }
}
