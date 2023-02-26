import React, { useState, useContext, useEffect } from "react";
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
      };


    const [counter, setCounter] = useState(0);
    const { data, loading, error, refetch } = useQuery(GET_CLIENTS);
  
    useEffect(() => {
        const intervalId = setInterval(() => {
            refetch();
        }, 1000);

        return () => clearInterval(intervalId);
    }, [refetch]);

    useEffect(() => {
      if (data && data.clients) {
        setCounter(parseInt(data.clients[props.number].state, 10));
      }
    }, [data]);

    const increment = () => {
        if(counter < 99)
        { 
            handleEdit(data.clients[props.number].id,(counter+33).toString());
            setCounter(counter+33); 

        }else//test
          {
            handleEdit(data.clients[props.number].id, "0")
            setCounter(0);  
        }
             
    }; 

    if(counter === 0)
    {
        return(
            <div className='LedSquare ledOff' onClick={increment}>
                
        </div>
    );
    }else if(counter === 33)
    {
        return(
            <div className='LedSquare ledOn25' onClick={increment}>
               
           </div>
        );  
    }else if(counter === 66)
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
