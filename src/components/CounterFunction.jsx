import React, { useState } from "react";
const CounterFunction=()=>{
    console.log("Component started");
    // let value=0;
    // const increase=()=>{
    //     value++;
        
    // }
    const [value,setValue]=useState(0);
    const increase=()=>{
        setValue(value+1);
    }
        

    
    return(
        <div>
        <h2>Counter value: {value}</h2>
        <button onClick={increase}>Click</button>
       
        </div>
    );
};
export default CounterFunction;