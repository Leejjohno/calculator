const Symbols = ({ wordArray, name, clickHandler }) => {
    const symbols = ["=", "+", "-", "*", "C", "DEL"]
    return ( <div className="symBox">
                {wordArray.map((word, index) => (
                    <button 
                    key={index} 
                    onClick={() => clickHandler(word)}
                    >{word}
                    </button>
                ))}
                    {name}

            </div>
    )
};

export default Symbols;