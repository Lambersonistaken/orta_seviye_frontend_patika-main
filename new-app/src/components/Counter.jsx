import React from 'react'
import { useState, useEffect } from "react";

function Counter() {
    let [number, setNumber] = useState(0);
    let [name, setName] = useState("Emir");
  
    useEffect(() => {
      console.log("Component Mount Edildi");

        setInterval(() => {
            setNumber((n) => n+1);
        }
        , 1000);

        return () => {
            console.log("Component Unmount Edildi");
            clearInterval();
        }

    }, []);
    
    useEffect(() => {
      console.log("number State Güncellendi");
    },[number]);
    
    useEffect(() => {
      console.log("name State Güncellendi");
    },[name]);
  
  return (
    <div>
      <h1>{number}</h1>
    <button onClick={() => setNumber(number+1)} >+</button>
  
    </div>
  )
}

export default Counter
