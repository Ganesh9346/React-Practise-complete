import React, { useState } from "react"
const UseStatePara=()=>{
    const [word,setWord]=useState("");
    const addvalue=(event)=>{
        setWord(event.target.value);
    }
    return(
        <div className="text">
        
        <input onChange={addvalue} type="text" placeholder="Enter Some Data"></input>
        <p>you typed {word}</p>
        </div>

    );
};
export default UseStatePara;