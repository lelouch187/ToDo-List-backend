import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as process from 'process';
import { Todo, TodoSchema } from './schemas/todo.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_HOST, {
      connectionName: 'todo',
    }),
    MongooseModule.forFeature(
      [{ name: Todo.name, schema: TodoSchema }],
      'todo',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
