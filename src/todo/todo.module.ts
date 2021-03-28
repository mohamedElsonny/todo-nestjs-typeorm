import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Task } from 'task/entities/task.entity';

import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';

import { Todo } from './entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, Task])],
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}
