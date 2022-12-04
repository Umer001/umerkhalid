import React from "react";

function DeleteBtn(props) {
  return props.data.length > 0 ? (
    <ul>
      {props.data.map((singleorder) => (
        <li>
          <button onClick={props.remove} className="close-btn">
            X
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>No Orders</p>
  );
}

export default DeleteBtn;
