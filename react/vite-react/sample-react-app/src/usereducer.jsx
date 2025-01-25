import React, { useReducer } from 'react';

const initialState = {count: 0}
const reducer = (state, action) => {
    switch(action.type){
        case "increase": return { count: state.count + 1};
        case "decrease": return { count: state.count - 1}
        default: return state;
    }
}

const App2 = () => {
    const [state, dispatch] = useReducer(reducer,initialState)

    const increaseCount = () =>{
        dispatch({type: "increase"});
    };
    const decreaseCount = () =>{
        dispatch({type: "decrease"});
    };

    return (
        <>
            <h2>Count : {state.count} </h2>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </>
    );
};

export default App2;