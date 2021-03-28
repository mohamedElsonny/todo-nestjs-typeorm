import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Todo } from 'todo/entities/todo.entity';

import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';

import { Task } from './entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, Task])],
  providers: [TaskResolver, TaskService],
})
export class TaskModule {}
