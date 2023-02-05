import React, { useState, useEffect } from "react";
import MiniitemCard from "./mini-item-card";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { slice } from "../../../src/store/slices/auth";
import { slice as redirectSlice } from "../../../src/store/slices/redirect";
import { verifyToken } from "../../utils/verify-token";
import { EmptyCart } from "../../components";
import {
  getTotals,
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../../store/slices/cart";

const CartSidebar = ({ open, changeHandler }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalAmount } = useSelector((state) => {
    return state.cart;
  });
  const { showAuthPop, currentUser } = useSelector((state) => {
    return state.auth;
  });
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(open);
    dispatch(getTotals());
    open
      ? document.body.classList.add("overflow-hidden", "pr-[15px]")
      : document.body.classList.remove("overflow-hidden", "pr-[15px]");
  }, [open, dispatch, items]);
  const handleCheckout = () => {
    if (!currentUser || !verifyToken()) {
      dispatch(redirectSlice.actions.setRedirect("/checkout"));
      changeHandler(setIsOpen(false));
      dispatch(slice.actions.setShowAuthPop(!showAuthPop));
    } else {
      changeHandler(setIsOpen(false));
      navigate("/checkout");
    }
  };
  return (
    <>
      {isOpen ? (
        <div
          onClick={() => changeHandler(setIsOpen(!isOpen))}
          className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"
        />
      ) : (
        ""
      )}
      <div
        id="drawer-right-example"
        className={`fixed top-0 right-0 z-40 h-screen p-4 duration-1000 z-60 transition-transform bg-white w-96 dark:bg-gray-800 transform-x-full rounded-l-2xl ${
          isOpen ? "transform-none block" : "hidden"
        }`}
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        <h2
          id="drawer-right-label"
          className="inline-flex items-center text-lg mb-4  font-semibold text-gray-500 dark:text-gray-400"
        >
          Cart
        </h2>
        <button
          onClick={() => changeHandler(setIsOpen(!isOpen))}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        {items.length > 0 ? (
          <div className="flex justify-between flex-col h-[90vh]">
            <div className=" overflow-y-auto">
              {items.map((item) => {
                return (
                  <MiniitemCard
                    key={item.id}
                    item={item}
                    handleIncreseProduct={() => dispatch(addToCart(item))}
                    handleRemoveProduct={() => dispatch(removeFromCart(item))}
                    handleDecreaseProduct={() => dispatch(decreaseCart(item))}
                    actions={true}
                  />
                );
              })}
            </div>
            <div>
              <div
                className="MuiBox-root mui-style-0"
                style={{
                  padding: "10px 15px",
                  borderTop: "1px solid rgba(0, 0, 0, 0.12)",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    margin: "6px 0px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Subtotal</span>
                  <span style={{ color: "rgb(131, 143, 155)" }}>
                    Rs. {totalAmount}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    margin: "6px 0px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Delivery Charges</span>
                  <span style={{ color: "rgb(131, 143, 155)" }}>Rs. 0</span>
                </div>
                <div
                  style={{
                    margin: "6px 0px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Grand total </span>
                  <span
                    style={{ fontWeight: "bold", color: "rgb(131, 143, 155)" }}
                  >
                    Rs.{totalAmount}
                  </span>
                </div>
              </div>

              <div className=" mt-5">
                <button
                  onClick={handleCheckout}
                  to="/checkout"
                  className=" flex items-center w-full justify-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  CHECKOUT
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
};

export default CartSidebar;
