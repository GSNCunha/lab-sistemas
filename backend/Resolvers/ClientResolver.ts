import { Mutation, Arg, Query, Resolver } from "type-graphql";
import { CreateClientInput, EditClientInput } from "../inputs/ClientInput";
import { Client } from "../Models/Client";
import { ClientMongo } from "../mongodb/Models/Client";

@Resolver()
export class ClientResolver{

@Query(()=> [Client])
async clients(){
    return await ClientMongo.find();
}

@Query(()=> Client)
async client(@Arg("id") id: string){
    return await ClientMongo.findOne({ _id: id });
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
    @Mutation(()=> Client)
    async editClient(
        @Arg("editClientObject") editClientObject: EditClientInput
    ){

        const client = { ...editClientObject}

        await ClientMongo.updateOne({_id : client.id}, client);

        return client;

    }
} 