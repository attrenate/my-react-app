import { useState } from 'react'
import { useEffect } from 'react';

function AnotherComponent () {
    const [color, setColor] = useState("");
    useEffect(() => {
        console.log(`The color is now: ${color}`);
    }, [color]);

    return(
        <div>
            <h1>Choose your favorite color</h1>
            <input type="color" 
            onChange={(e) => setColor(e.target.value)}
            value = {color}
            />
            <p>So your favorite color is {color}</p>
        </div>
    );
}
export default AnotherComponent;