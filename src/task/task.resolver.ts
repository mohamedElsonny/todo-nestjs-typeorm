import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { TaskService } from './task.service';

import { Task } from './entities/task.entity';
import { TaskCreateArgs } from './dto/args/task-create.arg';

@Resolver((of) => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query((returns) => [Task])
  tasks() {
    return this.taskService.findAllTasks();
  }

  @Mutation((returns) => Task)
  createTask(@Args() args: TaskCreateArgs) {
    return this.taskService.createTask(args);
  }
}
