import { ArgsType, Field } from '@nestjs/graphql';

import { TodoCreateInput } from '../inputs/todo-create.input';

@ArgsType()
export class TodoCreateArgs {
  @Field()
  data: TodoCreateInput;
}
