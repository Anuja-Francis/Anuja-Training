import React, {useState, useMemo} from "react";

const Memo = () =>{
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const memocalculation = useMemo(() => {
        expensiveFunction(number)
    }, [number])

    const calculation = expensiveFunction(number)
    const cssstyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    }

    return (
        <div style={cssstyle}>
            <input onChange={(e) => setNumber(e.target.valueAsNumber)} type="number" value={number} />
            <h2>Calculation: {memocalculation}</h2>
            <button onClick={() => setDark(!dark)}>Toggle</button>
        </div>
    )
}

function expensiveFunction(num){
    console.log("Loop started")
    for (let i=0; i<1000000000; i++)
        return num
}

export default Memo