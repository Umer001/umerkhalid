import { Button } from "flowbite-react";
import React, { useState } from "react";

const Categories = ({ filterProducts, fetchAll }) => {
  const [state, setState] = useState({
    btn1: "failure",
    btn2: "light",
    btn3: "light",
    btn4: "light",
    btn5: "light",
  });
  return (
    <div className="flex flex-wrap gap-2 mt-4 px-2 py-4 sm:px-4 place-content-center   top-0 z-2">
      <div>
        <Button
          color={state.btn1}
          onClick={() => {
            setState({
              btn2: "light",
              btn3: "light",
              btn4: "light",
              btn5: "light",
              btn1: "failure",
            });
            fetchAll();
          }}
          pill={true}
          className="font-bold "
        >
          All
        </Button>
      </div>
      <div>
        <Button
          color={state.btn2}
          onClick={() => {
            setState({
              btn1: "light",
              btn3: "light",
              btn4: "light",
              btn5: "light",
              btn2: "failure",
            });
            filterProducts(1);
          }}
          pill={true}
          className="font-bold  "
        >
          Starters
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            setState({
              btn1: "light",
              btn2: "light",
              btn4: "light",
              btn5: "light",
              btn3: "failure",
            });
            filterProducts(2);
          }}
          color={state.btn3}
          pill={true}
          className="font-bold  "
        >
          Pizza
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            setState({
              btn1: "light",
              btn2: "light",
              btn3: "light",
              btn5: "light",
              btn4: "failure",
            });
            filterProducts(3);
          }}
          color={state.btn4}
          pill={true}
          className="font-bold  "
        >
          Sandwich
        </Button>
      </div>
      <div>
        <Button
          color={state.btn5}
          onClick={() => {
            setState({
              btn1: "light",
              btn2: "light",
              btn3: "light",
              btn4: "light",
              btn5: "failure",
            });
            filterProducts(4);
          }}
          pill={true}
          className="font-bold  "
        >
          Side Order
        </Button>
      </div>
    </div>
  );
};

export default Categories;
