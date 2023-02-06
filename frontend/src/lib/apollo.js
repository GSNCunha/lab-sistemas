import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client"
import fetch from "cross-fetch"

export const client = new ApolloClient({
    link: new HttpLink({uri: "http://localhost:3002/", fetch}), cache: new InMemoryCache(),
})