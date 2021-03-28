import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { formatSearchInput } from '../lib/formatWhereManyInput';

import { Todo } from './entities/todo.entity';
import { TodoCreateArgs } from './dto/args/todo-create.arg';
import { TodoFindManyArgs } from './dto/args/todo-find-many.arg';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAllTodos(args: TodoFindManyArgs) {
    const searchOptions = {} as { where: any };
    if ('where' in args) {
      searchOptions.where = formatSearchInput(args.where as any);
    }
    const todos = await this.todoRepository.find({
      where: searchOptions.where,
      relations: ['tasks'],
    });

    return todos;
  }

  createTodo(args: TodoCreateArgs) {
    const todo = this.todoRepository.create(args.data);
    return this.todoRepository.save(todo);
  }
}
