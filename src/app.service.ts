import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(Todo.name, 'todo') private TodoModel: Model<Todo>) {}

  async findAll(): Promise<Todo[]> {
    return this.TodoModel.find().exec();
  }
}
