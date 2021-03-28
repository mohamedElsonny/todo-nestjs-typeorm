import { ArgsType, Field } from '@nestjs/graphql';

import { TaskCreateInput } from '../inputs/task-create.input';

@ArgsType()
export class TaskCreateArgs {
  @Field()
  data: TaskCreateInput;
}
