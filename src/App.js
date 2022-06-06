import React, { useState } from 'react';
import Display from './components/Display';
import Calculator from './components/Calculator';
import { evaluate } from 'mathjs';

export const App = () => {
  const [displayVal, setDisplayVal] = useState("0") 

  const clickHandler = (e) => {
    if (displayVal === "0") {
      setDisplayVal(e.target.value)
    } else if (e.target.value === "=") {
      setDisplayVal(evaluate(displayVal))
      console.log(displayVal)
    } else if (e.target.value === "C") {
      setDisplayVal("0")
    } else {
    setDisplayVal(displayVal + e.target.value)
    console.log(e.target.value)
    }
  }     

  return (
    <div className='App'>
      <div className='container'>
        <Display displayVal={displayVal} />
        <Calculator clickHandler={clickHandler} />
      </div>
    </div>
  )
}

export default App;
