import { Mutation, Arg, Query, Resolver } from "type-graphql";
import { CreateClientInput } from "../inputs/ClientInput";
import { Client } from "../Models/Client";
import { ClientMongo } from "../mongodb/Models/Client";

@Resolver()
export class ClientResolver{

@Query(()=> [Client])
async clients(){
    return await ClientMongo.find();
}
@Mutation(() => Client)
async createClient(
    @Arg("createClientObject") createClientObject: CreateClientInput,
){

    const { state } = createClientObject

    return await ClientMongo.create({
       state 
    });
}
}