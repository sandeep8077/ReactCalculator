// importing all libraries and files

import '../clc.css'

// creating a class components for all buttons
const Buttons =(props)=> {
  // handling clicks over there
 const  handleclicks =  (event) => {
    props.Buttonclicked(event.target.value);
  }

 
    return (
      <div className='buttons'>
        {/* All the buttons in row one */}
        <div className='row1'>
          <button
            className='btn btn-action' 
            onClick={handleclicks}
            value="c"
          >
            C
          </button>
          <button
            className='btn btn-action'
            onClick={handleclicks}
            value="+/-"
          >
            +/-
          </button>
          <button
            className='btn btn-action'
            onClick={handleclicks}
            value="%"
          >
            %
          </button>
          <button
            className='btn btn-calc'
            onClick={handleclicks}
            value="/"
          >
            ÷
          </button>
        </div>
        {/* All the buttons in row 2 */}
        <div className='row2'>
          <button className='btn' onClick={handleclicks} value="7">
            7
          </button>
          <button className='btn' onClick={handleclicks} value="8">
            8
          </button>
          <button className='btn' onClick={handleclicks} value="9">
            9
          </button>
          <button
            className='btn btn-calc'
            onClick={handleclicks}
            value="*"
          >
            x
          </button>
        </div>
        {/* All the buttons in row 3 */}
        <div className='row3'>
          <button className='btn' onClick={handleclicks} value="4">
            4
          </button>
          <button className='btn' onClick={handleclicks} value="5">
            5
          </button>
          <button className='btn' onClick={handleclicks} value="6">
            6
          </button>
          <button
            className='btn btn-calc'
            onClick={handleclicks}
            value="-"
          >
            -
          </button>
        </div>
        {/* all the buttons in row 4 */}
        <div className='row4'>
          <button className='btn' onClick={handleclicks} value="1">
            1
          </button>
          <button className='btn' onClick={handleclicks} value="2">
            2
          </button>
          <button className='btn' onClick={handleclicks} value="3">
            3
          </button>
          <button
            className='btn btn-calc'
            onClick={handleclicks}
            value="+"
          >
            +
          </button>
        </div>
        {/* All the buttons in row 5 */}
        <div className='row5'>
          <button className='btn-0' onClick={handleclicks} value="0">
            0
          </button>
          <button className='btn' onClick={handleclicks} value=".">
            .
          </button>
          <button
            className='btn btn-calc'
            onClick={handleclicks}
            value="="
          >
            =
          </button>
        </div>
      </div>
    );
  
}

export default Buttons;
