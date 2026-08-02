import React, { useState } from "react";
const Counter=()=>{
    const [count,countValue]=useState(0);
    const increase=()=>{
            countValue(count+1);
        };
    const decrease=()=>{
            countValue(count-1);
    };
    const zero=()=>{
            countValue(0);
    }
    return(
        <>
        <p>{count}</p>
        <button onClick={increase}>Click Here</button>
        <button onClick={decrease}>Click to Decrease</button>
        <button onClick={zero}>Click to zero</button>
        </>
    );
};
export default Counter;