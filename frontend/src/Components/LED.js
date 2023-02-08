import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../App";
import {converter} from "../binconverter.js"
import { useQuery, useMutation, gql } from "@apollo/client";

export const GET_CLIENTS = gql`
  query {
    clients {
      id
      state
    }
  }
`;

export const EDIT_CLIENT = gql`
  mutation editClient($editClientObject: EditClientInput!) {
    editClient(editClientObject: $editClientObject) {
      id
      state
    }
  }
`;

const LED = (props) => {

    const [editClient, editClientInfo] = useMutation(EDIT_CLIENT);

    const handleEdit = async (id, value) => {
        const result = await editClient({
          variables: {
            editClientObject: {
              id: id,
              state: value
            }
          }
        });
        console.log(result);
      };


    const [counter, setCounter] = useState(0);
    const {setBin} = useContext(AppContext)
    const { data, loading, error } = useQuery(GET_CLIENTS);
  
    useEffect(() => {
      if (data && data.clients) {
        setCounter(parseInt(data.clients[props.number].state), 2);
        console.log(parseInt(data.clients[props.number].state))
      }
    }, [data]);

    const increment = () => {
        if(counter < 100)
        { 
            handleEdit(data.clients[props.number].id,(counter+25).toString());
            setCounter(counter+25); 
        }else 
        {
            handleEdit(data.clients[props.number].id, "0")
            setCounter(0);  
        }
             
    }; 
    if(counter == 0)
    {
        return(
            <div className='LedSquare ledOff' onClick={increment}>
                
        </div>
    );
    }else if(counter == 25)
    {
        return(
            <div className='LedSquare ledOn25' onClick={increment}>
               
           </div>
        );  
    }else if(counter == 50)
    {
        return(
            <div className='LedSquare ledOn50' onClick={increment}>
               
           </div>
        );  
    }else if(counter == 75)
    {
        return(
            <div className='LedSquare ledOn75' onClick={increment}>
                
           </div>
        );  
    }else
    {
        return(
            <div className='LedSquare ledOn100' onClick={increment}>
                
           </div>
        );  
    }
};
export default LED;
