import React, {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("Guest");
    const updateName  = () => {
        setName("Spongebob");
    }
    const [age, setAge] = useState(0);
    
    const incremetAge = () => {
        setAge(age + 1);
    }

    const [isEmployed, setIsEmployed] = useState(false);
     
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }
    return(
        <div>
            <p>
                Name: {name}
            </p>
            <button onClick={updateName}>Set Name</button>
            <p>
                Age: {age}
            </p>
            <button onClick={incrementAge}>Increment Age</button>
             <p>
                Is Employed : {isEmployed ? "Yes" : "No"}
            </p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
            
        </div>
        
    );
}

export default MyComponent