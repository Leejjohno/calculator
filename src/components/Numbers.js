const Numbers = ({numberHandler}) => {
    const numbersArray = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
        return (  
            <div className="numBox">
                {numbersArray.map((number, index) => (
                    <button 
                    key={index}
                    onClick={() => numberHandler(number)}
                    >{number}
                    </button>
                ))}
            </div>
            

    
  )
}

export default Numbers;