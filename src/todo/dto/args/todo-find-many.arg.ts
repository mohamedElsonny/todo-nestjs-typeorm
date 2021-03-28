import { ArgsType, Field } from '@nestjs/graphql';

import { TodoWhereInput } from '../inputs/todo-where.input';

@ArgsType()
export class TodoFindManyArgs {
  @Field({ nullable: true })
  where?: TodoWhereInput;
}
