import React from "react";

const colors = [
  {
    id: "1",
    code: "cadetblue",
    name: "Cadet Blue",
  },
  {
    id: "2",
    code: "green",
    name: "Green",
  },
  {
    id: "3",
    code: "red",
    name: "Red",
  },
  {
    id: "4",
    code: "orange",
    name: "Orange",
  },
  {
    id: "5",
    code: "blue",
    name: "Blue",
  },
  {
    id: "6",
    code: "black",
    name: "Black",
  },
];

const Colors = () => {
  return (
    <div className="row">
      {colors.map((color) => {
        return (
          <div
            className="col-md-4  d-flex  justify-content-center text-white  align-items-center"
            style={{
              background: `${color.code}`,
              height: "200px",
              border: "4px solid white",
            }}
            key={color.id}
          >
            {color.name}
          </div>
        );
      })}
    </div>
  );
};

export default Colors;
