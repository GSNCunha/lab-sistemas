import DE2Component from "./DE2Component";
import React, { useState, useContext } from "react";
import { AppContext } from "../App";



const Grid = (props) => {
    const {bin} = useContext(AppContext)
    return(
        <div className='container'>
            <div className='blank'/>
            <div className='blank'/>
            <div className='blank'/>
            <div className='blank'/>
            <DE2Component/>
            <div className='blank'/>
            <div className='blank'/>
            <div className='blank'><h1>{bin}</h1></div>
            <div className='blank'/>
        </div>
    );
};
export default Grid;

