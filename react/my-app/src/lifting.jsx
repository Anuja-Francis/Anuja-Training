import React,{useState} from "react";
export function ChildA({counter,incrementCounter}){
    return(
        <div>
            <p>Counter: {counter}</p>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    );
}
export function ChildB({ counter }) {
    return (
      <div>
        <h2>Child B</h2>
        <p>Counter: {counter}</p>
      </div>
    );
}
  
export function Parent() {
    const [counter, setCounter] = useState(0);
  
    const incrementCounter = () => setCounter(counter + 1);
  
    return (
      <div>
        <h1>Parent</h1>
        <ChildA counter={counter} incrementCounter={incrementCounter} />
        <ChildB counter={counter} />
      </div>
    );
}