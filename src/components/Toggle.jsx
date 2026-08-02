import React, { useState } from "react";
const Toggle=()=>{
    const [color,setColor]=useState("white");
    const changeColor=()=>{
        if(color=="white"){
            setColor("black");
        }
        else{
            setColor("white");
        }
    }
    

    return (
        <div style={{backgroundColor:color, height:"100vh"}}>
            <button onClick={changeColor}>Click to {color=="white"?"black":"white"}</button>
        </div>

    );
};
export default Toggle;