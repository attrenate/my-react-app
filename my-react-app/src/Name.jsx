import { useState } from "react";

function Name() {
    const [name, setName] = useState("");
    return(
        <div>
            <input type="text" 
            className="userInput" 
            placeHolder="Enter your name..." 
            onChange={(e) => setName(e.target.value)}
            value = {name}
            />
            <p>Hello, {name === "" ? "Stranger" : name}!</p>

        </div>
    );
}

export default Name;