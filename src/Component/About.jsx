import React, { useState } from 'react'

import { useCounter } from "./CounterContext";

import Nav from './Nav'

const About = () => {
  const { count, increment, reset, decrement } = useCounter();
  console.log("useCounter hook values in:", { count, increment, reset });

const [counter,SetCounter]=useState(0)
const intervalRef = React.useRef(null);

  const Start = () => {
    console.log("Start button clicked");
    if (intervalRef.current !== null) return

    intervalRef.current = setInterval(() => {
    SetCounter((prevCounter) => prevCounter + 1)
  },1000)
  }
  const Stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }   

  const reset2 =() => {
    Stop()
    SetCounter(0);
   
  }  


  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
  
  
  return (
    <>
      <Nav />
      <div>

       <div>
        <h3>Count: {count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset2</button>
        <button disabled={count === 0} onClick={decrement}>Decrement</button>
      </div>


      <div>
        <h3>counter: {formatTime(counter)}</h3>
        <button onClick={Start}>Start</button>
        <button onClick={reset2}>Reset</button>
        <button onClick={Stop}>Stop</button>
      </div>
    </div>
    </>
  )
}

export default About