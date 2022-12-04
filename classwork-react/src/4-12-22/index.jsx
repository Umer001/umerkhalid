import React, { useState } from "react";
import Input from "./input";
import Table from "./table";
import "./style.css";
const Orders = () => {
  const [order, setOrder] = useState("");
  const [orderList, setOrderList] = useState([]);
  const [pending, setPending] = useState("");
  const [pendingList, setPendingList] = useState([]);
  const [completed, setCompleted] = useState("");
  const [completedList, setCompletedList] = useState([]);

  const removeRow = (index) => {
    const ordersarr = [...orderList];
    const completedarr = [...pendingList];
    const pendingarr = [...completedList];

    ordersarr.splice(index, 1);
    completedarr.splice(index, 1);
    pendingarr.splice(index, 1);
    setOrderList(ordersarr);
    setPendingList(pendingarr);
    setCompletedList(completedarr);
  };

  const printData = () => {
    setOrderList([...orderList, order]);
    setPendingList([...pendingList, pending]);
    setCompletedList([...completedList, completed]);
    setCompleted("");
    setOrder("");
    setPending("");
  };
  const setState = (e) => {
    switch (e.target.name) {
      case "order":
        setOrder(e.target.value);
        break;
      case "pending":
        setPending(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.value);
        break;
    }
  };

  return (
    <div className="container">
      <div className="row  mt-5">
        <div className="col-md-12">
          <form autoComplete="off" className="form-inline" id="ordersForm">
            <div className="row ">
              <Input
                id="order"
                title="Order"
                name="order"
                type="text"
                value={order}
                change={(event) => setState(event)}
              />
              <Input
                id="pending"
                title="Pending"
                type="text"
                name="pending"
                value={pending}
                change={(event) => setState(event)}
              />
              <Input
                id="completed"
                title="Completed"
                value={completed}
                type="text"
                name="completed"
                change={(event) => setState(event)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={() => printData()}
            >
              Submit
            </button>
          </form>
        </div>

        <div className="col-md-12  mt-4">
          <h1>Orders Data</h1>
          <Table
            cols={["Orders", "Pending", "Completed", "Action"]}
            orders={orderList}
            pending={pendingList}
            compelted={completedList}
            remove={(index) => removeRow(index)}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
