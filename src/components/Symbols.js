const Symbols = ({ symbolHandler }) => {
    const symbols = ["=", "+", "-", "*", "C", "DEL"]
    return ( <div className="symBox">
                {symbols.map((symbol, index) => (
                    <button 
                    key={index} 
                    onClick={() => symbolHandler(symbol)}
                    >{symbol}
                    </button>
                ))}
                    

            </div>
    )
};

export default Symbols;