import React from "react";
import moment from "moment";
import { Button } from "flowbite-react";
import { TablePlacehodler } from "../../components";
import TH from "./th";
import TD from "./td";
import DatatablePaggination from "./datatable-paggination";
import { useState } from "react";
const Table = ({
  title,
  data,
  changePage,
  totalDocuments,
  pageSize,
  page,
  loading,
  filterHandler,
  customer,
}) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    filterHandler(value);
  };
  return (
    <div className="py-2">
      <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
        <h2 className="text-2xl leading-tight dark:text-white">{title}</h2>
        <div className="text-end">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0"
          >
            <div className=" relative ">
              <input
                type="text"
                id='"form-subscribe-Filter'
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="search.."
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-red-700 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 ">
        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow ">
          <table className="min-w-full leading-normal ">
            {loading ? (
              <TablePlacehodler />
            ) : !customer ? (
              <>
                <thead>
                  <tr>
                    <TH>Order#</TH>
                    <TH>Customer</TH>
                    <TH>Date/Time</TH>
                    <TH>Status</TH>
                    <TH>Actions</TH>
                  </tr>
                </thead>
                <tbody>
                  {data.map((order) => {
                    return (
                      <tr>
                        <TD> {order.order_no}</TD>
                        <TD>{order.customer_id.fullname}</TD>
                        <TD>
                          {moment(order.createdAt).format(
                            "DD MMM, YYYY h:mm a"
                          )}
                        </TD>
                        <TD status={order.status}> </TD>
                        <TD>
                          <Button size="xs" color="warning">
                            <i className="mr-2 fa fa-edit"></i>
                            Edit
                          </Button>
                        </TD>
                      </tr>
                    );
                  })}
                </tbody>
              </>
            ) : (
              <>
                <thead>
                  <tr>
                    <TH>Sr#</TH>
                    <TH>Name</TH>
                    <TH>Registerd on</TH>
                    <TH>Email</TH>
                    <TH>Phone</TH>
                    <TH>Actions</TH>
                  </tr>
                </thead>
                <tbody>
                  {data.map((customer, index) => {
                    return (
                      <tr key={customer._id}>
                        <TD> {index + 1}</TD>
                        <TD> {customer.fullname}</TD>
                        <TD>
                          {moment(customer.createdAt).format(
                            "DD MMM, YYYY h:mm a"
                          )}
                        </TD>
                        <TD> {customer.email}</TD>
                        <TD> {customer.phone} </TD>
                        <TD>
                          <Button size="xs" color="warning">
                            <i className="mr-2 fa fa-edit"></i>
                            Edit
                          </Button>
                        </TD>
                      </tr>
                    );
                  })}
                </tbody>
              </>
            )}
          </table>
          <DatatablePaggination
            changePage={changePage}
            totalDocuments={totalDocuments}
            pageSize={pageSize}
            page={page}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
