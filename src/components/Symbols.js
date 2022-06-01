const Symbols = ({ symbolHandler }) => {
    const symbolsArray = ["=", "+", "-", "*", "C", "DEL"]
        return ( 
            <div className="symBox">
                {symbolsArray.map((symbol, index) => (
                    <button 
                    key={index}
                    value={symbol} 
                    onClick={() => symbolHandler(symbol)}
                    >{symbol}
                    </button>
                ))}
            </div>
    )
};

export default Symbols;