import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class StringComparisonInputType {
  @Field({ nullable: true })
  _eq?: string;

  @Field({ nullable: true })
  _neq?: string;

  @Field({ nullable: true })
  _ilike?: string;

  @Field({ nullable: true })
  _like?: string;

  @Field((type) => [String], { nullable: true })
  _in?: string[];

  @Field((type) => [String], { nullable: true })
  _nin?: string[];
}

@InputType()
export class NumberComparisonInputType {
  @Field({ nullable: true })
  _eq?: string;

  @Field({ nullable: true })
  _neq?: string;

  @Field({ nullable: true })
  _lt?: number;

  @Field({ nullable: true })
  _lte?: number;

  @Field({ nullable: true })
  _gt?: number;

  @Field({ nullable: true })
  _gte?: number;

  @Field((type) => [String], { nullable: true })
  _in?: string[];

  @Field((type) => [String], { nullable: true })
  _nin?: string[];
}

@InputType()
export class DateComparisonInputType {
  @Field({ nullable: true })
  _eq?: string;

  @Field({ nullable: true })
  _neq?: string;

  @Field({ nullable: true })
  _lt?: Date;

  @Field({ nullable: true })
  _lte?: Date;

  @Field({ nullable: true })
  _gt?: Date;

  @Field({ nullable: true })
  _gte?: Date;

  @Field((type) => [String], { nullable: true })
  _in?: string[];

  @Field((type) => [String], { nullable: true })
  _nin?: string[];
}
