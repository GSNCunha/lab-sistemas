import { useState } from "react";

const LED = (props) => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
            setCounter(counter+1);   
    }; 
    return(
        <div className='LedSquare' onClick={increment}>
            {counter}
       </div>
    );
};
export default LED;