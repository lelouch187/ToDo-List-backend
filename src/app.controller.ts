import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Todo } from './schemas/todo.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return await this.appService.findAll();
  }

  @Post()
  async createTodo(@Body() todo: Todo): Promise<void> {
    return await this.appService.createTodo(todo);
  }
}
