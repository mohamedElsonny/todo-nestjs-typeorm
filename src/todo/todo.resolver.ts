import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class TodoResolver {
  @Query((returns) => String)
  hello() {
    return 'Hello';
  }
}
