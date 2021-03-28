import { Field, InputType } from '@nestjs/graphql';

import { DateComparisonInputType } from '../../../dto/input/typeorm-comparison.input';
import {
  StringComparisonInputType,
  NumberComparisonInputType,
} from '../../../dto/input/typeorm-comparison.input';

@InputType()
export class TodoWhereInput {
  @Field(() => NumberComparisonInputType, { nullable: true })
  id: NumberComparisonInputType;

  @Field(() => StringComparisonInputType, { nullable: true })
  content: StringComparisonInputType;

  @Field(() => StringComparisonInputType, { nullable: true })
  description: StringComparisonInputType;

  @Field(() => DateComparisonInputType, { nullable: true })
  createdAt: DateComparisonInputType;

  @Field(() => DateComparisonInputType, { nullable: true })
  updatedAt: DateComparisonInputType;

  @Field((type) => [TodoWhereInput], { nullable: true })
  _or: TodoWhereInput[];

  @Field((type) => [TodoWhereInput], { nullable: true })
  _and: TodoWhereInput[];

  @Field((type) => [TodoWhereInput], { nullable: true })
  _not: TodoWhereInput[];
}
