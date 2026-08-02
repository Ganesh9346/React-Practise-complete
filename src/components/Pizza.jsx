import React from "react";
import "./Pizza.css";
const Pizza=(props)=>{
    return (
        <div className="com">
            <img src={props.pizza} alt="pizza image"/>
            <h2>{props.name}</h2>
            <p>{props.price} /-</p>
            <button>Order now</button>
        </div>
    )
}
export default Pizza;