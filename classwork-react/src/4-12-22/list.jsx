import React from "react";

function List(props) {
  return props.data.length > 0 ? (
    <ul>
      {props.data.map((singleorder) =>
        singleorder != "" ? <li>{singleorder}</li> : ""
      )}
    </ul>
  ) : (
    <p>No Orders</p>
  );
}

export default List;
