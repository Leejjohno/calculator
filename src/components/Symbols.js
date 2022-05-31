const Symbols = ({ wordArray, name }) => {
    const symbols = ["=", "+", "-", "*", "C", "DEL"]
    return ( <div className="symBox">
                {wordArray.map((word, index) => (
                    <div key={index}>{word}</div>
                ))}
                    {name}
            </div>
    )
};

export default Symbols;