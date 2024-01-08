import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

enum Status {
  DONE = 'done',
  AWAIT_EXECUTION = 'awaits execution',
  IN_PROGRESS = 'in progress',
}

@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  text: string;

  @Prop({ required: true, enum: Status })
  status: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
