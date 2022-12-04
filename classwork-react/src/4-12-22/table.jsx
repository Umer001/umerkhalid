import React from "react";
import DeleteBtn from "./DeleteBtn";
import List from "./list";

function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          {props.cols.length > 0
            ? props.cols.map((col) => (col != "" ? <th>{col}</th> : ""))
            : ""}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <List data={props.orders} />
          </td>
          <td>
            <List data={props.pending} />
          </td>
          <td>
            <List data={props.compelted} />
          </td>
          <td>
            <DeleteBtn remove={props.remove} data={props.compelted} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
