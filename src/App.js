import React from 'react'
import Symbols from './components/Symbols'

export const App = () => {
	const wordArray = ["apples", "betty", "charles"]
	const name = "Batman"
  return (
	<div>
		<Symbols wordArray={wordArray} name={name}/>
	</div>
  )
}


export default App;
