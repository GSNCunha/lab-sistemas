 import './App.css';
import Grid from "./Components/Grid";
import React, {useState, createContext} from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { client } from "./lib/apollo";


export const AppContext = createContext(null);


export const GET_CLIENTS = gql`
  query {
    clients {
      id
      state
    }
  }
`;


function App() {
  const {data, loading, error } = useQuery(GET_CLIENTS);
  console.log(data);
  const [bin, setBin] = useState("")
  return (
    <AppContext.Provider value={{bin, setBin}}>
      <div className='App'>
        <Grid/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
