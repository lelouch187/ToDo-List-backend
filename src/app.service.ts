import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.schema';
import { Model } from 'mongoose';

export interface UpdateTodo extends Todo {
  _id: string;
}

@Injectable()
export class AppService {
  constructor(@InjectModel(Todo.name, 'todo') private TodoModel: Model<Todo>) {}

  async findAll(): Promise<Todo[]> {
    try {
      return await this.TodoModel.find().sort({ status: -1 }).exec();
    } catch (e) {
      throw new Error(e);
    }
  }

  async createTodo(todo: Todo): Promise<Todo> {
    try {
      return await this.TodoModel.create(todo);
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteTodo(id: string): Promise<void> {
    try {
      await this.TodoModel.findByIdAndDelete(id);
    } catch (e) {
      throw new Error(e);
    }
  }
  async updateTodo(todo: UpdateTodo): Promise<void> {
    const { _id, ...updateTodo } = todo;
    try {
      await this.TodoModel.findByIdAndUpdate(_id, updateTodo);
    } catch (e) {
      throw new Error(e);
    }
  }
}
