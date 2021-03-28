import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class TaskCreateInput {
  @Field()
  body: string;

  @Field(() => Int)
  todoId: number;
}
