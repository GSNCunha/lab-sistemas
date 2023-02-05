import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Client {
  @Field((type) => ID)
  id: string;

  @Field()
  led: string;

  @Field()
  state: string;
}