import React, { useRef } from "react";

const App1 = () => {
    const inpelement = useRef();
    const handleClick = () => {
        console.log(inpelement.current)
        inpelement.current.style.width = "300px"
        inpelement.current.focus()
    };

    return (
        <>
            <input type="text" ref={inpelement} />
            <button onClick={handleClick}>Click Here</button>
        </>
    )
}

export default App1;