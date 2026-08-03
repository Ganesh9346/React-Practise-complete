import React, { useEffect, useEffectEvent, useState } from "react"
import Counter from "../Counter";
const AlertUseEffect=(props)=>{
    const [count,setCount]=useState(0);
    const increaseCounter=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        alert("count is changed");
    },[count])

    useEffect(()=>{
        alert("color is changed");
    },[props.color])
    
    return(
        <div className="alert">
        <button onClick={increaseCounter}>Click To Increament</button>
        <p>you clicked {count}</p>
        <p> the color is changed to {props.color}</p>
        </div>
    );
};
export default AlertUseEffect