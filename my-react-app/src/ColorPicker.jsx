import { useState } from "react";

function ColorPicker(){
    const [color, setColor] = useState("#000000");

    return(
        <div className="div">
            <h1>Choose your favorite Color!</h1>
            <input type="color" 
            className="color-container"
            onChange={(e) => setColor(e.target.value)}
            value = {color}
            />
            <p>So your favorite color is: {color}</p>
        </div>
    );
}

export default ColorPicker;