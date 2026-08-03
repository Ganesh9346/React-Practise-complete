import React from 'react'
import Card from './components/Card'
import './App.css'
import DestructuringProps from './components/DestructuringProps';
import Pizza from './components/Pizza';
import pizza from "./assets/pizza.png";
import Counter from './components/Counter';
import ConditionalRendering from './components/ConditionalRendering';
import Toggle from './components/Toggle';
import UseStatePara from './components/UseStatePara';
import AlertUseEffect from './components/UseEffect/AlertUseEffect';
import CounterFunction from './components/CounterFunction';
const App = () => {
  // const name="Ganesh";
  // const age=20;
      const name="Hot Pizza";
      const price=1500;

  return (
    
      // <div className="data">
      // <Card name={name} age={20} />
      // <Card name={"lokesh"} age={25} />
      // <DestructuringProps name={"anil"} age={20}/>
      // </div>

    //<Pizza pizza={pizza} name={name} price={price}/>



    //<Counter />


    //<ConditionalRendering />

    <Toggle />

    //<UseStatePara />
    //<AlertUseEffect color={"red"}/>
    //<CounterFunction />

      
  );
};

export default App;
