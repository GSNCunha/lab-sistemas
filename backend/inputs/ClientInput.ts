import { ID, Field, InputType} from "type-graphql";

@InputType()
export class CreateClientInput{

  
    @Field()
    state: string;
}

@InputType()
export class EditClientInput{

    @Field((type) => ID)
    id: string;

    @Field()
    state: string;
}