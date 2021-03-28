import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { formatSearchInput, SearchOptions } from '../lib/formatWhereManyInput';

import { Todo } from './entities/todo.entity';
import { TodoCreateArgs } from './dto/args/todo-create.arg';
import { TodoFindManyArgs } from './dto/args/todo-find-many.arg';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  findAllTodos(args: TodoFindManyArgs) {
    const searchOptions = {} as { where: any };
    if ('where' in args) {
      searchOptions.where = formatSearchInput(args.where as any);
    }
    return this.todoRepository.find(searchOptions);
  }

  createTodo(args: TodoCreateArgs) {
    const todo = this.todoRepository.create(args.data);
    return this.todoRepository.save(todo);
  }
}
