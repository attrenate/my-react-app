import { useState } from 'react'
import { useEffect } from 'react';

function Component () {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((todo) => setData(todo))
      .catch((error) => console.error(error));
      return () =>{
          console.log('Cleaning up');
      }
      
    }, []);
    
    return(
        <div>
            {data ? <h1>{data.title}</h1> : <p>Loading todo…</p>}
        </div>
    );
}

export default Component;