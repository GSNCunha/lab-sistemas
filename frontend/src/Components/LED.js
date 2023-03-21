import React, { useState, useContext, useEffect } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { converter } from "./binDec";
import { NumberConverter } from "./ArduinoData";
import axios from 'axios';

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
    const [arduino, setArduino] = useState(0);
    const { data, loading, error, refetch } = useQuery(GET_CLIENTS);

    useEffect(() => {
        const intervalId = setInterval(() => {
            refetch();
        }, 1000);
 
        return () => clearInterval(intervalId);
    }, [refetch]);

    
    
  
///////////////////////////
    useEffect(() => {

      const intervalId = setInterval(() => {
        axios.get('http://localhost:3005/readfile?filename=Arduino.txt')
        .then(response => {
            const value = JSON.stringify(response.data).trim(); // Convert to string and trim any whitespace from the file contents
            console.log(`${value}`);
            if(value != "0")
            {
              if(props.number == 0)
              {
                handleEdit('63dff4134a57605b77f84c2f',(NumberConverter(value, props.number)).toString());
              }
              if(props.number == 1)
              {
                handleEdit('63e04dfef3c531d74fbb7919',(NumberConverter(value, props.number)).toString());
              }
              if(props.number == 2)
              {
                handleEdit('63e04e06f3c531d74fbb791b',(NumberConverter(value, props.number)).toString());
              }
              if(props.number == 3)
              {
                handleEdit('63e04e08f3c531d74fbb791d',(NumberConverter(value, props.number)).toString());
              }
              setCounter(NumberConverter(value, props.number));
              setArduino(1);
            }else{
              setArduino(0);
            }
        })
        .catch(error => console.error(error));
    }, 1000);



        if (data && data.clients) {
            const output = converter(data).toString();
            console.log(output);
            axios.post('http://localhost:3005/writefile', { filename: 'site.txt', data: output })
            .then(response => console.log(response))
            .catch(error => console.error(error));
            if(arduino == 0)
            {
              setCounter(parseInt(data.clients[props.number].state, 10));
            }
              
        }
    }, [data]);

    const increment = () => {
        if(counter < 3 && arduino == 0)
        { 
            handleEdit(data.clients[props.number].id,(counter+1).toString());
            setCounter(counter+1); 
        }else if(arduino == 0) {
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
    }else if(counter === 1)
    {
        return(
            <div className='LedSquare ledOn33' onClick={increment}>
               
           </div>
        );  
    }else if(counter === 2)
    {
        return(
            <div className='LedSquare ledOn66' onClick={increment}>
                
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
