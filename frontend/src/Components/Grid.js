import DE2Component from "./DE2Component";
import React, { useEffect, useState } from "react";



const Grid = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        port.on('data', (receivedData) => {
          // convert the received data to an array of bytes
          const bytes = Array.from(receivedData);
    
          // update the state variable with the received data
          setData((prevData) => prevData.concat(bytes));
        });
      }, []);


    return(
        <div className='container'>
            <div className='blank'></div>
            <div className='blank'/>
            <div className='blank'/>
            <div className='blank'/>
            <DE2Component/>
            <div className='blank'/>
            <div className='blank'/>
            <div className='blank'/>
            <div className='blank'/>
        </div>
    );
};
export default Grid;

