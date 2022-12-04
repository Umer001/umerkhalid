import React from "react";

function Input(prop) {
  return (
    <div className="form-group  col-md-4 mt-2">
      <label for={prop.id}>{prop.title}</label>
      <input
        name={prop.name}
        type={prop.type}
        value={prop.value}
        onChange={prop.change}
        className="form-control"
        id={prop.id}
      />
    </div>
  );
}

export default Input;
