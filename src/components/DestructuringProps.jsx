import React from "react";
import './DestructuringProps.css'
const DestructuringProps=({name,age})=>{
    return(
        <div className="des">
        <h2>hello {name}</h2>
        <p>your age {age}</p>
        </div>
    );
};
export default DestructuringProps;