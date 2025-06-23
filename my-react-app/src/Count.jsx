import { useState } from "react";

function Count(){
    const [count, setCount] = useState(0);
    const decrease = () => {
       setCount(count - 1);
    };
     const reset = () => {
       setCount(0);
    };
    const increase = () => {
       setCount(count + 1);
    };



    return(
        <div className="counter-container">
            <div>
            <h1>{count}</h1>

            </div>
            <div className="btn-wrapper">

            <button className="decrease-btn" onClick={decrease}>Decrease</button>
            <button className="reset-btn" onClick={reset}>Reset</button>
            <button className="increase-btn" onClick={increase}>Increase</button>        
            </div>
        </div>
    );
}
export default Count;