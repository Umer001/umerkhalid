import React, { useState } from "react";

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
  const [mainbg, setmainbg] = useState("white");
  const setBg = (colorcode) => {
    setmainbg(colorcode);
  };
  return (
    <section className="vh-100" style={{ backgroundColor: `${mainbg}` }}>
      <div className="row">
        {colors.map((color) => {
          return (
            <div
              className="col-md-4  d-flex  text-white  align-items-center"
              style={{
                background: `${color.code}`,
                height: "200px",
                border: "4px solid transparent",
                cursor: "pointer",
              }}
              onClick={() => setBg(color.code)}
              key={color.id}
            >
              {color.name}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Colors;
