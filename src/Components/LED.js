import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import {converter} from "../binconverter.js"

const LED = (props) => {
    const [counter, setCounter] = useState(0);
    const {setBin} = useContext(AppContext)

    const increment = () => {
        if(counter < 100)
        {
            setBin(converter(counter+25, props.number));
            setCounter(counter+25);  
            
        }else 
        {
            setBin(converter(0, props.number));
            setCounter(0);  
        }
             
    }; 
    if(counter == 0)
    {
        return(
            <div className='LedSquare ledOff' onClick={increment}>
                {counter}
        </div>
    );
    }else if(counter == 25)
    {
        return(
            <div className='LedSquare ledOn25' onClick={increment}>
                {counter}
           </div>
        );  
    }else if(counter == 50)
    {
        return(
            <div className='LedSquare ledOn50' onClick={increment}>
                {counter}
           </div>
        );  
    }else if(counter == 75)
    {
        return(
            <div className='LedSquare ledOn75' onClick={increment}>
                {counter}
           </div>
        );  
    }else
    {
        return(
            <div className='LedSquare ledOn100' onClick={increment}>
                {counter}
           </div>
        );  
    }
};
export default LED;