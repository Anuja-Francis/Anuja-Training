import React, { useRef } from 'react'

function UncontrolledForm() {
    const inputRef = useRef();

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert('A name was submitted: ' + inputRef.current.value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" ref={inputRef} />
            </label>
            <button type="submit">Submit</button>
        </form>
      );
}

export default UncontrolledForm;