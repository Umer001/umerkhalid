import React from "react";

const OrderPlaceholder = () => {
  return (
    <div className=" grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4 gap-2  px-2 lg:px-0  py-4 sm:px-10   my-3">
      <div
        role="status"
        className="space-y-8   space-y-0 space-x-4 rounded-lg flex items-center shadow-md border border-gray-200"
      >
        <div className="w-full h-[376px] bg-gray-200  animate-pulse  dark:bg-gray-700"></div>
        <span className="sr-only">Loading...</span>
      </div>
      <div
        role="status"
        className="space-y-8   space-y-0 space-x-4 rounded-lg flex items-center shadow-md border border-gray-200"
      >
        <div className="w-full h-[376px] bg-gray-200  animate-pulse  dark:bg-gray-700"></div>
        <span className="sr-only">Loading...</span>
      </div>
      <div
        role="status"
        className="space-y-8   space-y-0 space-x-4 rounded-lg flex items-center shadow-md border border-gray-200"
      >
        <div className="w-full h-[376px] bg-gray-200  animate-pulse  dark:bg-gray-700"></div>
        <span className="sr-only">Loading...</span>
      </div>
      <div
        role="status"
        className="space-y-8   space-y-0 space-x-4 rounded-lg flex items-center shadow-md border border-gray-200"
      >
        <div className="w-full h-[376px] bg-gray-200  animate-pulse  dark:bg-gray-700"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default OrderPlaceholder;
