import React, { useState, useEffect } from "react";
import { Table } from "../../../components";
import { getAllCustomers } from "../../../services/http-services/auth";
import { filterOrders } from "../../../services/http-services/order";
import toast from "react-hot-toast";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(false);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalDocuments, setTotalDocuments] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const values = { page, pageSize };
      await getAllCustomers({
        values,
        cbSuccess: ({ status, message, data }) => {
          setCustomers(data.rez);
          setTotalDocuments(data.total);
          setLoading(false);
        },
        cbFailure: ({ status, message }) => {
          toast.error(status, message);
          setLoading(false);
          console.log(
            "🚀 ~ file: index.jsx:30 ~ message ~ datmessagea",
            message
          );
        },
      });
    };
    fetchData();
  }, [page]);

  const filterHandler = async (query) => {
    setFilter(true);
    setLoading(true);
    setPage(1);
    const values = { page, pageSize, query };
    await filterOrders({
      values,
      cbSuccess: ({ status, message, data }) => {
        setCustomers(data.orders);
        setTotalDocuments(data.total);
        setLoading(false);
        console.log("🚀 ~ file: index.jsx:30 ~ fetchData ~ data", data);
      },
      cbFailure: ({ status, message }) => {
        toast.error(status, message);
        setLoading(false);
      },
    });
  };

  const changePage = (newPage) => {
    setPage(newPage);
  };
  return (
    <Table
      loading={loading}
      data={customers}
      page={page}
      totalDocuments={totalDocuments}
      pageSize={pageSize}
      title="Customers"
      customer={true}
      changePage={changePage}
      filterHandler={filterHandler}
    />
  );
};

export default Customers;
