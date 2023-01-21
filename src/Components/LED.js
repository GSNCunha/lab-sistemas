import { useState } from "react";

const LED = (props) => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        if(counter < 100)
        {
            setCounter(counter+25);  
        }else 
        {
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