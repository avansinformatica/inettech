import { Todo } from '@inettech/api-interfaces';
import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('todo')
  getAll(): Todo[] {
    return this.todoService.getAll();
  }
}
