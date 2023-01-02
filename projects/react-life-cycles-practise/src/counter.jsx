import React from "react";
import { useState } from "react";
const Counter = () => {
  var num = localStorage.getItem("counter")
    ? localStorage.getItem("counter")
    : 0;

  const [number, setNumber] = useState(num);

  const plus = () => {
    let counter = number;
    counter++;
    setNumber(counter);
    localStorage.setItem("counter", counter);
  };
  const minus = () => {
    let counter = number;
    counter--;
    setNumber(counter);
    localStorage.setItem("counter", counter);
  };
  return (
    <div className="my-3 container">
      Your score is: <input value={number} name="number" />
      <span
        onClick={() => plus()}
        style={{ border: "1px solid black", padding: 5 }}
      >
        +
      </span>
      <span
        style={{ padding: 5, border: "1px solid black" }}
        onClick={() => minus()}
      >
        -
      </span>
    </div>
  );
};

export default Counter;
