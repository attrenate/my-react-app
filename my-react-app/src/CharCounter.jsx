import { useState } from "react";


function CharCounter(){
    const [char, setChar] = useState("");
    
   function onlyLetters(str) {
     return str.replace(/[^a-zA-Z]/g, "");
   }

    return(
        <div>
            <input type="text" 
            placeholder="Type something"
            className="userInput"
            onChange={(e) => setChar(onlyLetters(e.target.value))}
            value = {char}
            />
            <p>Word count is: {char === "" ? 0 : char.length}</p>
        </div>
    );

}

export default CharCounter;