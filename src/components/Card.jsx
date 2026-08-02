import React from 'react'
import './Card.css'
const Card=(props)=>{
    return(
        <div className="card">
            <h3>hello {props.name}</h3>
            <p>your Age is {props.age}</p>
        </div>
    );
};
export default Card
