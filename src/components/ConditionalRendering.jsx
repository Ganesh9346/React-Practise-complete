import React, { useState } from "react"
const ConditionalRendering=()=>{
    const [show,setShow]=useState(false);
    const changeValue=()=>{
        if(show==true){
           setShow(false);
        }
        else{
            setShow(true);
        }
    }
    
    return(
        <div>
            
            
        <button onClick={changeValue}>{show?"hide":"show"}</button>
        {show?<p>You selected White color</p>:<p>You selected black color</p>}
        
        </div>
    );
};
export default ConditionalRendering;