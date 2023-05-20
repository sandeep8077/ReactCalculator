// creating a component for display the result
import '../clc.css'
const  Result =(props) => {
  
    return (
      <div className='result'>
        <p>{
        props.result}</p>
      </div>
    );
  
}
export default Result;
