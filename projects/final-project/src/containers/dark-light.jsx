import React, { useState } from "react";
const DarkLight = () => {
  const [bgcolor, setBgcolor] = useState("#fff");
  const [btncolor, setBtncolor] = useState("black");
  function setDark() {
    setBgcolor("#000");
    setBtncolor("white");
  }
  function setLight() {
    setBgcolor("#fff");
    setBtncolor("black");
  }
  return (
    <div className="row vh-100" style={{ backgroundColor: `${bgcolor}` }}>
      <div className="col-md-12  d-flex  justify-content-center   align-items-center">
        <button
          className={`btn mr-2 text-${btncolor}`}
          style={{ border: `1px solid ${btncolor}`, background: `${bgcolor}` }}
          onClick={() => setDark()}
        >
          Dark
        </button>
        <button
          className="btn "
          style={{ background: "white" }}
          onClick={() => setLight()}
        >
          Light
        </button>
      </div>
    </div>
  );
};
export default DarkLight;
