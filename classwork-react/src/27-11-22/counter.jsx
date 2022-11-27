import React, { useState } from "react";

const Counter = () => {
  const [count, setNum] = useState(0);

  const increment = () => {
    
        setNum(count + 1);
    }
   
  
  const decrement = () => {
   setNum(count - 1);
  };
  const reset = () => {
    setNum((prevState) => (prevState = 0));
  };

  
  return (
    <div style={{ margin: 50 }}>
      <button onClick={() => decrement()}>Decrement -</button>
      <input type="text" value={count===0?"Zero":count} style={{ maxWidth: 50 }} />
      <button onClick={() => increment()}>Increment +</button>
      <br />
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default Counter;
