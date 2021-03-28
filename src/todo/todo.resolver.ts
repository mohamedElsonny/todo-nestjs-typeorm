import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { TodoService } from './todo.service';

import { Todo } from './entities/todo.entity';
import { TodoCreateArgs } from './dto/args/todo-create.arg';
import { TodoFindManyArgs } from './dto/args/todo-find-many.arg';

@Resolver((of) => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query((returns) => [Todo])
  todos(@Args() args?: TodoFindManyArgs) {
    return this.todoService.findAllTodos(args);
  }

  @Mutation((returns) => Todo)
  createTodo(@Args() args: TodoCreateArgs) {
    return this.todoService.createTodo(args);
  }
}
