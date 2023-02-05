import { Alert, Button, Spinner } from "flowbite-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  EmptyCart,
  OrderCard,
  OrderPlaceholder,
  Paggination,
} from "../../components";
import { getOrders } from "../../services/http-services/order";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";
const Orders = () => {
  const { user_id } = useSelector((state) => {
    return state.auth.currentUser;
  });
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [totalDocuments, setTotalDocuments] = useState(0);
  useEffect(() => {
    const fetchData = async (user_id) => {
      setLoading(true);
      const values = { user_id, page, pageSize };
      await getOrders({
        values,
        cbSuccess: ({ status, message, data }) => {
          setOrders(data.orders);
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
    if (user_id) fetchData(user_id);
  }, [user_id, page]);
  const changePage = (newPage) => {
    setPage(newPage);
  };
  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 ">
        <span className="text-2xl font-bold text-gray-800">My Orders</span>
      </div>
      {loading ? (
        <OrderPlaceholder />
      ) : orders === undefined || orders.length == 0 ? (
        <EmptyCart
          back={true}
          title="No orders found"
          subtitle="Add an item and start making your first order"
        />
      ) : (
        <>
          <div className="  grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4 gap-3  px-2 lg:px-0  py-4 sm:px-10   my-3  ">
            {orders &&
              orders?.map((order) => {
                return <OrderCard key={order._id} order={order} />;
              })}
          </div>
          <Paggination
            page={page}
            totalDocuments={totalDocuments}
            pageSize={pageSize}
            changePage={changePage}
          />
        </>
      )}
    </>
  );
};
export default Orders;
