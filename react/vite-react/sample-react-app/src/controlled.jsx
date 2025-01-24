import React, {useState} from 'react';

function Control() {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = () => {
        console.log(inputValue)
    }
    return (
        <>
            <h1>Controlled Component</h1>
            <input type="text" placeholder='Enter Name' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Control;