import React, { useState } from 'react'
import Symbols from './components/Symbols'
import Display from './components/Display'
import Numbers from './components/Numbers'
import Words from './components/Words'

export const App = () => {
  const [displayVal, setDisplayVal] = useState("Placeholder") 
  const arr = ["apples", "betty", "charles"];

  const clickHandler = (e) => {
    setDisplayVal(e.target.value)
  }

  return (
	<div>
    <Display displayVal={displayVal} />
    <Words arr={arr} clickHandler={clickHandler}/>
	</div>
  )
}

export default App;
