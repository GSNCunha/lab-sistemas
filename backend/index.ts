import "reflect-metadata";
import path from "path";
require("dotenv").config({path: ".env.local" });
import "./mongodb/connect";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { ClientResolver } from "./Resolvers/ClientResolver";

async function main(){
    const schema = await buildSchema({
        resolvers: [ClientResolver],
        emitSchemaFile: path.resolve(__dirname,"scheme.ggl"),
    });

    const server = new ApolloServer({
        schema,
    });

    const { url } = await server.listen({port : 3002});
    console.log("Server running on " + url );
}

main();