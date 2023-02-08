
import LED from "./LED";

const DE2Component = (props) => {
    return(
        <div className='DE2GridElement'>
         <div className='container2'>
            <div className='blank'/>
            <div className='blank'/>
            <div className='blank'/>
            <div className='blank'/>
            <div className='ledRow'>
                <LED number='0'/>
                <LED number='1'/>
                <LED number='2'/>
                <LED number='3'/>
            </div>
            <div className='blank'/>
            <div className='blank'/>
            <div className='blank'/>
            <div className='blank'/>
        </div>
       </div>
    );
};
export default DE2Component;