import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TodoCreateInput {
  @Field()
  content: string;

  @Field({ nullable: true })
  description?: string;
}
