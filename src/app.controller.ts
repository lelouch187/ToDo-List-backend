import { Body, Controller, Delete, Get, Post, Put, Res } from '@nestjs/common';
import { AppService, UpdateTodo } from './app.service';
import { Todo } from './schemas/todo.schema';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async findAll(
    @Res({ passthrough: true }) response: Response,
  ): Promise<Todo[]> {
    try {
      return await this.appService.findAll();
    } catch (e) {
      response.status(400).json({ message: e.message });
    }
  }

  @Post()
  async createTodo(
    @Body() todo: Todo,
    @Res({ passthrough: true }) response: Response,
  ): Promise<Todo> {
    try {
      return await this.appService.createTodo(todo);
    } catch (e) {
      response.status(400).json({ message: e.message });
    }
  }

  @Delete()
  async deleteTodo(
    @Body() id: { id: string },
    @Res({ passthrough: true }) response: Response,
  ): Promise<void> {
    try {
      await this.appService.deleteTodo(id.id);
    } catch (e) {
      response.status(400).json({ message: e.message });
    }
  }

  @Put()
  async updateTodo(
    @Body() todo: UpdateTodo,
    @Res({ passthrough: true }) response: Response,
  ): Promise<void> {
    try {
      await this.appService.updateTodo(todo);
    } catch (e) {
      response.status(400).json({ message: e.message });
    }
  }
}
