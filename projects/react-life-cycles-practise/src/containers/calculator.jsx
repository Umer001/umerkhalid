import React from "react";
import { useState, useReducer } from "react";

const initialStates = {
  first: 0,
  second: 0,
  result: "No result yet",
};

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const reducer = (state, action) => {
  switch (action.type) {
    case "setFirst":
      return { ...state, first: action.payload };
    case "setSecond":
      return { ...state, second: action.payload };
    case "plus":
      return { ...state, result: state.first + state.second };
    case "minus":
      return { ...state, result: state.first - state.second };
    case "reset":
      return initialStates;
    default:
      break;
  }
};
const Calculator = () => {
  const [value, dispatch] = useReducer(reducer, initialStates);

  return (
    <div className="container">
      <h3 className="mt-4">Number 1</h3>
      {numbers.map((num, i) => {
        return (
          <button
            key={num}
            onClick={() => dispatch({ type: "setFirst", payload: num })}
            value={num}
            id={`btn1-${num}`}
            className={`btn mx-1 ${
              value.first == i ? "btn-success" : "btn-danger"
            }`}
          >
            {num}
          </button>
        );
      })}

      <h3 className="mt-2">Number 2</h3>
      {numbers.map((num, i) => {
        return (
          <button
            onClick={() => dispatch({ type: "setSecond", payload: num })}
            value={num}
            key={num}
            id={`btn2-${num}`}
            className={`btn mx-1 ${
              value.second == i ? "btn-success" : "btn-danger"
            }`}
          >
            {num}
          </button>
        );
      })}

      <h3 className="mt-4">Actions</h3>

      <button
        onClick={() => dispatch({ type: "plus" })}
        className="btn btn-warning me-1"
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: "minus" })}
        className="btn btn-primary me-1"
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: "clear" })}
        className="btn btn-danger me-1"
      >
        clear
      </button>

      <p className="mt-2">Result: {value?.result}</p>
    </div>
  );
};

export default Calculator;
