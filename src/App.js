import React, { useState } from 'react'
import Symbols from './components/Symbols'
import Display from './components/Display'

export const App = () => {
	const wordArray = ["apples", "betty", "charles"]
	const name = "Batman"
  const [text, setText] = useState("This is some text")

  const clickHandler = (word) => {
    setText(word)
  }

  return (
	<div>
		<Symbols wordArray={wordArray} name={name} clickHandler={clickHandler} />
    <Display text={text}/>
	</div>
  )
}


export default App;
