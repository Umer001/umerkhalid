import React from "react";
import { Button } from "flowbite-react";

import { Link } from "react-router-dom";
const EmptyCart = ({ back }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-[70vh]">
      <div className="my-[6px]">
        <span className="inline-block overflow-hidden w-[60px] h-[60px] bg-transparent opacity-1 border-0 m-0 p-0 relative">
          <img
            alt="Cart Empty"
            src="https://www.cheezious.com/images/cart-empty.svg"
            decoding="async"
            data-nimg="fixed"
            srcSet="https://www.cheezious.com/images/cart-empty.svg 1x, https://www.cheezious.com/images/cart-empty.svg 2x"
            className="absolute inset-0 bg-cover bg-center p-0 border-0 m-auto block w-0 h-0 min-w-full min-h-full max-w-full max-h-full object-contain"
          />
        </span>
      </div>
      <span className=" text-gray-700">Your cart is empty</span>
      <span className="my-[6px] text-sm text-gray-700">
        Add an item and start making your order
      </span>
      {back ? (
        <Link to="/">
          <Button color="failure" className="mt-2">
            <i className="fa fa-arrow-left mr-2"></i> Back to Menu
          </Button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default EmptyCart;
