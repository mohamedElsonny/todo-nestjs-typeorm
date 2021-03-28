import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Task } from './entities/task.entity';
import { TaskCreateArgs } from './dto/args/task-create.arg';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  async findAllTasks() {
    const tasks = await this.taskRepository.find();
    return tasks;
  }

  createTask(args: TaskCreateArgs) {
    const task = this.taskRepository.create(args.data);
    return this.taskRepository.save(task);
  }
}
