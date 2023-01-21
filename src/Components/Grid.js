import DE2Component from "./DE2Component";
import LedEditor from "./LedEditor";




const Grid = (props) => {
    return(
        <div className='container'>
            <div className='blank'/>
            <div className='blank'/>
            <div className='blank'/>
            <div className='blank'/>
            <DE2Component/>
            <div className='blank'/>
            <div className='blank'/>
            <LedEditor/>
            <div className='blank'/>
        </div>
    );
};
export default Grid;

