const Calculator = ({clickHandler}) => {
    const buttonArray = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "=", "+", "-", "*", "/", "C" ]
        return (  
            <div className="buttonBox">
                {buttonArray.map((button, index) => (
                    <button 
                    key={index}
                    value={button}
                    onClick={(e) => clickHandler(e)}
                    >{button}
                    </button>
                ))}
            </div>
  )
}

export default Calculator;