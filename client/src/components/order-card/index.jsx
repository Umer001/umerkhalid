import React from "react";
import { Card, Button, Label, TextInput, Badge } from "flowbite-react";
import moment from "moment";

const OrderCard = ({ order }) => {
  const formattedDate = moment(order.createdAt).format("DD MMM, YYYY");
  const formattedTime = moment(order.createdAt).format("h:mm a");
  const getStatus = {
    Processing: "warning",
    Done: "success",
    Cancel: "failure",
  };
  return (
    <div className="max-w-sm">
      <Card>
        <div className="flex justify-between">
          <h4 className="card-title font-weight-normal ">
            <p className="font-bold">{order.order_no} </p>
            <Badge color={getStatus[order.status]} className="w-fit mt-1">
              {order.status}
            </Badge>
          </h4>
          <small className="text-muted text-right">
            {formattedDate} <br />
            {formattedTime}
          </small>
        </div>
        <hr />
        <div className="h-110 overflow-auto relative  h-[100px] order-items">
          {order.items &&
            order.items?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex justify-between items-end mt-2 mr-1"
                >
                  <h4 className="card-title font-weight-normal ">
                    <p>
                      <small className="font-semibold"> {item.name}</small>
                      <small className="text-muted text-right ">
                        {` x ${item.quantity}`}
                      </small>
                    </p>
                  </h4>
                  <small className="text-muted text-right font-semibold w-[30%]">
                    Rs. {item.quantity * item.price}
                  </small>
                </div>
              );
            })}
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="font-semibold">Subtotal</p>

          <p className="text-right">Rs.{order.total_bill}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Delivery Charges</p>

          <p className="text-right">Rs.0</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Total</p>

          <p className="text-right">Rs.{order.total_bill}</p>
        </div>
        {/* <Button color="failure" size="xs">
          VIEW ORDER
        </Button> */}
      </Card>
    </div>
  );
};

export default OrderCard;
