import React from 'react'


const Words = ({ arr, clickHandler }) => {
  return (

    <div>
        {arr.map((word, index) => (
            <button 
            key={index}
            value={word}
            onClick={(e) => clickHandler(e)}
            >{word}
            </button>
        ))}
    </div>
  )
}

export default Words